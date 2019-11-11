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

inquirer.prompt(questions).then(answers => {
  console.log(chalk.red(answers.versionType));
});

var libVersion = require('../package.json').version;

/*
console.log(process.env.npm_package_version);
process.chdir('./projects/vertical-components');
console.log(require);*/