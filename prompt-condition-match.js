module.exports = function (process) {
  console.log(process.argv)
  return process.argv.splice(2).length <= 0;
};
