const os = require("os");
const ifaces = os.networkInterfaces();

function getConnections() {
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
  return connections;
}

module.exports = getConnections;
