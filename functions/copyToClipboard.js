const child_process = require("child_process");

function pbcopy(data) {
  return new Promise((resolve, reject) => {
    const proc = child_process.spawn("pbcopy");
    proc.stdin.write(data, err => reject(err));
    proc.stdin.end();
    resolve();
  });
}

module.exports = pbcopy;
