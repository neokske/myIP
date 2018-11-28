#! /usr/bin/env node
const commander = require("commander");
const packageInfo = require("../package.json");
const getPWD = require("../functions/pwd");
const copy = require("../functions/copyToClipboard");

commander
  .version(packageInfo.version)
  .option("-n, --nocopy", "Only prints PWD")
  .parse(process.argv);

const pwd = getPWD();
console.log(`Current directory: ${pwd}`);

if (!commander.nocopy) {
  copy(pwd)
    .then(() => {
      console.log("Copied PWD to clipboard");
    })
    .catch(err => console.error(err));
}
