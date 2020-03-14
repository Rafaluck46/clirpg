const clui = require('clui');
const chalk = require('chalk');

let Spinner = clui.Spinner;
var countdown = new Spinner(
    chalk.gray('Waiting for players...'),
    [chalk.cyan('⣾'),
    chalk.cyan('⣽'),
    chalk.cyan('⣻'),
    chalk.cyan('⢿'),
    chalk.cyan('⡿'),
    chalk.cyan('⣟'),
    chalk.cyan('⣯'),
    chalk.cyan('⣷')]);

module.exports = countdown;