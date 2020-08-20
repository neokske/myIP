import * as os from "os";

const ifaces = os.networkInterfaces();

type Connection = { ifname: string; address: string };

export const getConnections = () => {
  const connections: Connection[] = [];

  Object.keys(ifaces).forEach((ifname) => {
    let alias = 0;

    ifaces[ifname]?.forEach((iface) => {
      if ("IPv4" !== iface.family || iface.internal) {
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
};
