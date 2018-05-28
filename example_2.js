const createArray = require('./create-array');

const createArrayWith = (fn) => ({
  withSize: createArray(fn)
});
const result = createArrayWith(() => 10).withSize(2);

console.log(result);
