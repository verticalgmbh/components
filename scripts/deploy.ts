#!/usr/bin/env node

var runCmd = require('./script-functions').runCmd;

// Require 'chalk' for console text formatting
var chalk = require('chalk');

var version = process.env.npm_package_version;

deployScript();

async function deployScript() {
  console.log("--------------------------------------------------------------------------------\n" +
    "Deploying package\n" +
    "--------------------------------------------------------------------------------");
  console.log("");

  // Publish npm package
  if (process.argv[2] === 'test') {
    await runCmd(`npm pack ./dist/vertical-components`, "Publishing npm package"); // run 'npm run deploy test' for a test run
  }
  else {
    await runCmd(`npm publish dist/vertical-components --access public`, "Publishing npm package");
  }

  // Set git release tag
  await runCmd(`git tag ${version}`, "Setting git tag");

  // Package deployed
  console.log(chalk.green("\n--------------------------------------------------------------------------------\n" +
    "npm package published\n" +
    "--------------------------------------------------------------------------------"));
}