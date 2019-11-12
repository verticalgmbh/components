#!/usr/bin/env node

var runCmd = require('./script-functions').runCmd;

// Require 'chalk' for console text formatting
var chalk = require('chalk');

buildScript();

async function buildScript() {
  console.log("--------------------------------------------------------------------------------\n" +
    "Building release package\n" +
    "--------------------------------------------------------------------------------");
  console.log("");

  // Build angular packages with ng-packagr
  await runCmd(`ng build vertical-components`, "Building angular package");

  // Bundle scss files into _theming.scss file
  await runCmd(`scss-bundle`, "Bundling scss files");

  // Prebuild theme files
  var src = "./projects/vertical-components/assets/themes/";
  var dest = "./dist/vertical-components/prebuilt-themes/";
  var imp = "--importer=node_modules/node-sass-tilde-importer";
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