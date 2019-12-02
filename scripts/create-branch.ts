#!/usr/bin/env node

// TODO: Change require statements to imports. Note thattttt this causes an error with default exports.

// Require 'chalk' for console text formatting
var chalk = require('chalk');

// Require 'inquirer' for CLI questions
var inquirer = require('inquirer');

// Require runCmd function
var runCmd = require('./script').runCmd;

let branchType = "";
let currentVersion = process.env.npm_package_version;
let featureName = "";
let newVersion = "";
let versionType = "";

const questions = [
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

  // Get new version
  if (branchType === 'release' || branchType === 'hotfix') {
    let index = currentVersion.indexOf('.');
    let index2 = currentVersion.indexOf('.', index + 1);
    if (versionType === "major") {
      const major = currentVersion.substr(0, index);
      newVersion = (Number(major) + 1) + ".0.0";
    }
    else if (versionType === "minor") {
      const minor = currentVersion.substr(index + 1, index2 - (index + 1));
      newVersion = currentVersion.substring(0, index + 1) + (Number(minor) + 1) + ".0";
    }
    else if (versionType === "patch") {
      const patch = currentVersion.substr(index2 + 1);
      newVersion = currentVersion.substring(0, index2 + 1) + (Number(patch) + 1);
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