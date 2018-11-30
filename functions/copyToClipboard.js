const child_process = require("child_process");
const WINDOWS = "win32";
const MACOS = "darwin";

function copyToWindowsClip(data, resolve, reject) {
  const proc = child_process.spawn("clip");
  proc.stdin.write(data, err => reject(err));
  proc.stdin.end();
  resolve();
}

function copyToMacos(data, resolve, reject) {
  const proc = child_process.spawn("pbcopy");
  proc.stdin.write(data, err => reject(err));
  proc.stdin.end();
  resolve();
}

function copy(data) {
  return new Promise((resolve, reject) => {
    switch (process.platform) {
      case WINDOWS:
        copyToWindowsClip(data, resolve, reject);
        break;
      case MACOS:
        copyToMacos(data, resolve, reject);
        break;
      default:
        console.log("Copy isn't yet supported on your OS");
    }
  });
}

module.exports = copy;
