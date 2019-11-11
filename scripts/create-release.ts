// Require 'inquirer' for CLI
var inquirer = require('inquirer');

// Require child_process.exec to execute bash commands
var exec = require('child_process').exec;

// Require 'chalk' for console text formatting
var chalk = require('chalk');

var questions = [
  {
    type: 'list',
    name: 'versionType',
    message: 'Which version type?',
    choices: ['Major', 'Minor', 'Patch'],
    filter: function (val) {
      return val.toLowerCase();
    }
  }
];

var currentVersion = process.env.npm_package_version;
var newVersion = "";
var versionType = "";

createRelease();

async function createRelease() {
  try {
    console.log("--------------------------------------------------------------------------------\n" +
      "Creating hotfix\n" +
      "--------------------------------------------------------------------------------");

    await inquirer.prompt(questions).then(answers => {
      versionType = answers.versionType;
    });

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

    // Create release branch
    console.log(chalk.blue("Creating release branch"));
    await new Promise((resolve, reject) => {
      exec(`git checkout -b release-${newVersion} develop`, (err, stdout) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(stdout.trim());
      })
    });

    // Bump project version
    console.log(chalk.blue("Bumping project version"));
    await new Promise((resolve, reject) => {
      exec(`npm version ${newVersion}`, (err, stdout) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(stdout.trim());
      })
    });

    // Bump component library version
    console.log(chalk.blue("Bumping library version"));
    process.chdir('./projects/vertical-components');
    await new Promise((resolve, reject) => {
      exec(`npm version ${newVersion}`, (err, stdout) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(stdout.trim());
      })
    });

    // Create new commit
    console.log(chalk.blue("Creating new commit"));
    process.chdir('../..');
    await new Promise((resolve, reject) => {
      exec(`git commit -a -m "Bump version number to ${newVersion}"`, (err, stdout) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(stdout.trim());
      })
    });

    // Push to remote repository
    console.log(chalk.blue("Pushing to remote repository"));
    await new Promise((resolve, reject) => {
      exec(`git push origin release-${newVersion}`, (err, stdout) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(stdout.trim());
      })
    });

    console.log(chalk.green("--------------------------------------------------------------------------------\n" +
      "Created hotfix\n" +
      "--------------------------------------------------------------------------------"));
  }
  catch (err) {
    console.error(chalk.red(err));
  }
}