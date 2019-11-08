// Require fs-extra for copy-function
const fs = require('fs-extra');
const exec = require('child_process').exec;

// Run build script
console.log('\x1b[34m%s\x1b[0m', '\nRunning build script\n');
buildScript();

async function buildScript() {
  try {
    // Bundle scss files
    console.log('\x1b[34m%s\x1b[0m', 'Bundling scss files');
    await new Promise((resolve, reject) => {
      exec('scss-bundle', (err, stdout) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(stdout.trim());
      })
    });

    // Prebuilt theme css files
    console.log('\x1b[34m%s\x1b[0m', 'Prebuilding theme files');
    await new Promise((resolve, reject) => {
      exec('node-sass ./projects/vertical-components/assets/themes/ --importer=node_modules/node-sass-tilde-importer -o ./dist/vertical-components/prebuilt-themes/', (err, stdout) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(stdout.trim());
      })
    });

    // Copy README.md
    console.log('\x1b[34m%s\x1b[0m', 'Copying README.md');
    await fs.copy('./README.md', './dist/vertical-components/README.md');

    // Built package
    console.log('\x1b[32m%s\x1b[0m', '\nBuilt package\n');
  }
  catch (err) {
    console.error('\x1b[31m%s\x1b[0m', err);
  }
}