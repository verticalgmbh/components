#!/usr/bin/env node

// TODO: Change require statements to imports. Note that this causes an error with default exports.

// Require 'chalk' for console text formatting
var chalk = require('chalk');

// Require runCmd function
var runCmd = require('./script').runCmd;

const version = process.env.npm_package_version;

deployScript();

async function deployScript() {

  console.log("--------------------------------------------------------------------------------\n" +
    "Creating test npm package\n" +
    "--------------------------------------------------------------------------------");
  console.log("");

  if (process.argv[2] === 'test') {
    // Test npm package
    await runCmd(`npm pack ./dist/vertical-components`, "Creating test npm package"); // run 'npm run deploy test' for a test run

    // Test package created
    console.log(chalk.green("\n--------------------------------------------------------------------------------\n" +
      "Test npm package created\n" +
      "--------------------------------------------------------------------------------"));
  }
  else {

    console.log("--------------------------------------------------------------------------------\n" +
      "Deploying package\n" +
      "--------------------------------------------------------------------------------");
    console.log("");

    // Publish npm package
    await runCmd(`npm publish dist/vertical-components --access public`, "Publishing npm package");

    // Set git release tag
    await runCmd(`git tag ${version}`, "Setting git tag");

    // Package deployed
    console.log(chalk.green("\n--------------------------------------------------------------------------------\n" +
      "npm package published\n" +
      "--------------------------------------------------------------------------------"));
  }
}
