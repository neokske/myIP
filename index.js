#! /usr/bin/env node
const os = require("os");
const ifaces = os.networkInterfaces();
const copyPaste = require("copy-paste");
const commander = require("commander");
const inquirer = require("inquirer");
const _ = require("lodash");

commander
  .version("1.1.0")
  .option("-n, --nocopy", "No questions")
  .parse(process.argv);

const connections = [];

Object.keys(ifaces).forEach(function(ifname) {
  let alias = 0;

  ifaces[ifname].forEach(function(iface) {
    if ("IPv4" !== iface.family || iface.internal !== false) {
      return;
    }

    if (alias >= 1) {
      console.log(ifname + ":" + alias, iface.address);
    } else {
      console.log(ifname, iface.address);
    }

    connections.push({ ifname: ifname, address: iface.address });
    ++alias;
  });
});

if (!commander.nocopy) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "IP",
        message: "Which ip do you want to copy?",
        choices: [
          ...connections.map(connection =>
            _.join([connection.ifname, connection.address], " - ")
          )
        ]
      }
    ])
    .then(answer => {
      const chosenIP = answer.IP.split(" - ")[1];
      copyPaste.copy(chosenIP, () => {
        console.log("Copied IP address!!");
      });
    });
}
