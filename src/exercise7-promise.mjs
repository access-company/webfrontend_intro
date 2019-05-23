const consoleLog = (msg) => {
  process.stdout.write(msg);
};

const initiate = () => {
  return new Promise(resolve => resolve());
};

const makeMessagePromise = (message, second) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(message);
    }, second * 1000);
  });
};

const printMessagePromise = (message, second) => {
  return new Promise(resolve => {
    setTimeout(() => {
      consoleLog(message);
      resolve();
    }, second * 1000);
  });
};

initiate()
  .then(() => makeMessagePromise('Hello', 1))
  .then(msg => consoleLog(msg))
  .then(() => makeMessagePromise(' World', 3))
  .then(msg => consoleLog(msg))
  .then(() => makeMessagePromise('!', 2))
  .then(msg => consoleLog(msg))
  .then(() => makeMessagePromise('!\n', 1))
  .then(msg => consoleLog(msg))
  .then(() => printMessagePromise('Hello', 1))
  .then(() => printMessagePromise(' World', 3))
  .then(() => printMessagePromise('!', 2))
  .then(() => printMessagePromise('!\n', 1))
