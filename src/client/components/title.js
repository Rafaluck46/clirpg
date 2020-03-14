const figlet = require('figlet');
const chalk = require('chalk');
const spinner = require('./../components/spinner');

module.exports.initializeDungeonCli = () => {
    return new Promise((resolve, reject) => {
        figlet('Dungeon cli', {
            font: 'alligator2'
        }, (err, result) => {
            if (err) throw reject(err);
            console.log(chalk.red(result) + '\n');
            spinner.start();
            resolve();
        });
    });
}


