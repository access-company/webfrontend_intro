const consoleLog = (msg) => {
  process.stdout.write(msg);
};

setTimeout(() => {
  consoleLog('Hello');
  setTimeout(() => {
    consoleLog(' World');
    setTimeout(() => {
      consoleLog('!');
      setTimeout(() => {
        consoleLog('!\n');
      }, 1000);
    }, 2000);
  }, 3000);
}, 1000);
