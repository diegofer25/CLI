import fs from "fs";
import path from "path";

import 'babel-polyfill';
import minimist from "minimist";
import chalk from "chalk";
import inquirer from "inquirer";
import i18n from "i18n";
import _ from "lodash";

const CLIPath = path.resolve(path.dirname(fs.realpathSync(__filename)), "../");
const PackageJSON = require(path.join(CLIPath, "package"));

let prompt = inquirer.createPromptModule();
inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'));

i18n.configure({
    locales: ['en'],
    defaultLocale: 'en',
    directory: path.join(CLIPath, "locales")
});

class New {
    Plugin(){
        console.log("not implemented, sorry =(");
    }

    Controller(){
        console.log("not implemented, sorry =(");
    }
}

export default new New();
