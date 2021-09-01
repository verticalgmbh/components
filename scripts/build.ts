#!/usr/bin/env node

// TODO: Change require statements to imports. Note that this causes an error with default exports.

// Require 'chalk' for console text formatting
var chalk = require('chalk');

// Require runCmd function
var runCmd = require('./script').runCmd;

buildScript();

async function buildScript() {
  console.log("--------------------------------------------------------------------------------\n" +
    "Building release package\n" +
    "--------------------------------------------------------------------------------");
  console.log("");

  // Build angular packages with ng-packagr
  await runCmd(`ng build vertical-components --configuration production`, "Building angular package");

  // Bundle scss files into _theming.scss file
  await runCmd(`scss-bundle`, "Bundling scss files");

  // Prebuild theme files
  let src = "./projects/vertical-components/assets/themes/";
  let dest = "./dist/vertical-components/prebuilt-themes/";
  let imp = "--importer=node_modules/node-sass-tilde-importer";
  await runCmd(`node-sass ${src} ${imp} -o ${dest}`, "Prebuilding theme files");

  // Copy Readme from project directory to dist folder
  src = "./README.md"
  dest = "./dist/vertical-components/"
  await runCmd(`cp ${src} ${dest}`, "Copying README.md");

  // Release package built
  console.log(chalk.green("\n--------------------------------------------------------------------------------\n" +
    "Release package built\n" +
    "--------------------------------------------------------------------------------"));
}
