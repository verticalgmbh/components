#!/usr/bin/env node

var runCmd = require('./script-functions').runCmd;

// Require 'chalk' for console text formatting
var chalk = require('chalk');

// Require child_process.exec to execute bash commands
var exec = require('child_process').exec;

// Require 'inquirer' for CLI
var inquirer = require('inquirer');

var branchType = "";
var currentVersion = process.env.npm_package_version;
var featureName = "";
var newVersion = "";
var versionType = "";

var questions = [
  {
    type: 'list',
    name: 'branchType',
    message: 'Which branch type?',
    choices: ['Release', 'Hotfix', 'Feature'],
    filter: function (val) {
      return val.toLowerCase();
    }
  },
  {
    type: 'list',
    name: 'versionType',
    message: 'Which version type?',
    choices: ['Major', 'Minor', 'Patch'],
    when: function (answers) {
      return answers.branchType === 'release' || answers.branchType === 'hotfix';
    },
    filter: function (val) {
      return val.toLowerCase();
    }
  },
  {
    type: 'input',
    name: 'featureName',
    message: "Feature name?",
    when: function (answers) {
      return answers.branchType === 'feature';
    },
    filter: function (val) {
      return val.trim().replace(/\s\s+/g, ' ').replace(/ /g, '-').toLowerCase();
    }
  }
];

createBranch();

async function createBranch() {

  // Get answers
  await inquirer.prompt(questions).then(answers => {
    branchType = answers.branchType;
    featureName = answers.featureName;
    versionType = answers.versionType;
  });

  if (branchType === 'release' || branchType === 'hotfix') {
    if (versionType === "major") {
      var major = currentVersion.substr(0, 1);
      newVersion = (Number(major) + 1) + currentVersion.substring(1);
    }
    else if (versionType === "minor") {
      var minor = currentVersion.substr(2, 1);
      newVersion = currentVersion.substring(0, 2) + (Number(minor) + 1) + currentVersion.substring(3);
    }
    else if (versionType === "patch") {
      var patch = currentVersion.substr(4, 1);
      newVersion = currentVersion.substring(0, 4) + (Number(patch) + 1);
    }

    // Creating branch
    console.log("--------------------------------------------------------------------------------\n" +
      `Creating ${branchType}-${newVersion}\n` +
      "--------------------------------------------------------------------------------");
    console.log("");

    // Create branch
    if (branchType === 'release') {
      await runCmd(`git checkout develop`, `Switching to develop branch`);
      await runCmd(`git checkout -b ${branchType}-${newVersion} develop`, `Creating ${branchType} branch`);
    }
    else {
      await runCmd(`git checkout master`, `Switching to master branch`);
      await runCmd(`git checkout -b ${branchType}-${newVersion} master`, `Creating ${branchType} branch`);
    }

    // Bump project version
    await runCmd(`npm --no-git-tag-version version ${newVersion}`, "Bumping project version");

    // Bump component library version
    process.chdir('./projects/vertical-components');
    await runCmd(`npm --no-git-tag-version version ${newVersion}`, "Bumping library version");

    // Create new commit
    process.chdir('../..');
    await runCmd(`git commit -a -m "Bump version number to ${newVersion}"`, "Creating new commit");

    // Push to remote repository
    await runCmd(`git push origin ${branchType}-${newVersion}`, "Pushing to remote repository");

    // Branch created
    console.log(chalk.green("--------------------------------------------------------------------------------\n" +
      `Created ${branchType}-${newVersion}\n` +
      "--------------------------------------------------------------------------------"));
  }
  else {

    // Creating branch
    console.log("--------------------------------------------------------------------------------\n" +
      `Creating ${branchType}/${featureName}\n` +
      "--------------------------------------------------------------------------------");
    console.log("");

    // Create branch
    await runCmd(`git checkout -b ${branchType}/${featureName} develop`, `Creating ${branchType} branch`);

    // Push to remote repository
    await runCmd(`git push origin ${branchType}/${featureName}`, "Pushing to remote repository");

    // Branch created
    console.log(chalk.green("--------------------------------------------------------------------------------\n" +
      `Created ${branchType}/${featureName}\n` +
      "--------------------------------------------------------------------------------"));
  }
}