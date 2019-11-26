// Import 'chalk' for console text formatting
import * as chalk from 'chalk';
// Import child_process to execute bash commands
import * as child from 'child_process';

export default function runCmd(cmd, cmdTitle) {
  let exitCode: number;
  return new Promise(function (resolve, reject) {
    process.stdout.write(chalk.blue(cmdTitle));
    child.exec(cmd, (err, stdout, stderr) => {
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