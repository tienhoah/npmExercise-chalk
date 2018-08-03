var chalk = require("chalk");
var log = console.log;

var message = "Hello " + chalk.yellow("World");
log(message);
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
log(chalk.blue.bgRed.bold('Hello world!'));
log(chalk.green(
  'I am a green line ' +
  chalk.blue.underline.bold('with a blue substring') +
  ' that becomes green again!'
));
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));
