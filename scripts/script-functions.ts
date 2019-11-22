// Require 'chalk' for console text formatting
var chalk = require('chalk');

// Require child_process.exec to execute bash commands
var exec = require('child_process').exec;

exports.runCmd = function (cmd, cmdTitle) {
  var exitCode: number = 0;
  return new Promise(function (resolve, reject) {
    process.stdout.write(chalk.blue(cmdTitle));
    exec(cmd, (err, stdout, stderr) => {
      if (exitCode === 0) {
        if (stderr === "") {
          console.log(chalk.green(" ".repeat(70 - cmdTitle.length) + "[ PASSED ]"));
          resolve();
        }
        else {
          console.log(chalk.yellow(" ".repeat(70 - cmdTitle.length) + "[  WARN  ]"));
          console.warn(chalk.yellow(stderr));
          resolve();
        }
      }
      else {
        console.log(chalk.red(" ".repeat(70 - cmdTitle.length) + "[ FAILED ]"));
        console.error(chalk.red(stderr));
        reject(process.exit(exitCode));
      }
    }).on('exit', code => exitCode = code);
  })
}