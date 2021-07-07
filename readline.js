/* eslint-disable global-require, no-console, no-unused-expressions */
function waitKeyToExit () {
  console.log('\nPress any key to exit..');
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on('data', process.exit.bind(process, 0));
};

const oldLog = console.log;
let logRecord = '';
console.log = (input) => {
  logRecord += input;
};

waitKeyToExit();

console.log(logRecord === '\nPress any key to exit..')
process.exit = (code) => {
  logRecord += 'exit';
};

console.log = oldLog;
console.log(logRecord);

