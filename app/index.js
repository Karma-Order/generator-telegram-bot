const yosay = require('yosay');
const chalk = require('chalk');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    initializing() {
        this.log(yosay(chalk.green('initializing')));
    }

    prompting() {
        this.log(yosay(chalk.green('prompting')));
    }

    configuring() {
        this.log(yosay(chalk.green('configuring')));
    }

    writing() {
        this.log(yosay(chalk.green('writing')));
    }

    install() {
        this.log(yosay(chalk.green('install')));
    }

    end() {
        this.log(yosay(chalk.green('end')));
    }
};
