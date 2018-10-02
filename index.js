#! /usr/bin/env node
const os = require("os");
const ifaces = os.networkInterfaces();
const copyPaste = require("copy-paste");

const iets = [];

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

    iets.push({ ifname: ifname, address: iface.address });
    ++alias;
  });
});

copyPaste.copy(iets[0].address, () => {
  console.log("Copied wifi!");
});
