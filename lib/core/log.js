const chalk = require('chalk');
const appName = 'jscms-bak';

function repeatString(string, time) {
  return Array.from({length: time}).map(i => string).join("");
}

function log(type, content, indent = 2) {
  if (type === 'error') {
    console.log(`${chalk.red(`${repeatString(' ', indent)}[${appName} error]`)}  ${content}\n`);
    process.exit(1);
    return false;
  } else if (type === 'info') {
    console.log(`${chalk.blue(`${repeatString(' ', indent)}[${appName} info]`)}  ${content}`);
  } else if (type === 'processing') {
    console.log(`${chalk.green(`${repeatString(' ', indent)}[${appName} processing]`)}  ${content}`);
  } else if (type === 'done') {
    console.log(`${repeatString(' ', indent)}${chalk.bgGreen(chalk.black((' DONE ')))} ${content}`);
  }
}

module.exports = log;
