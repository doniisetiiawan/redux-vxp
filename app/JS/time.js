function takeXray(callback) {
  console.log('Ready, close your eye.');
  setTimeout(() => {
    console.log('Great you are done.');
    callback();
  }, 2000);
}

module.exports = takeXray;
