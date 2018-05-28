const createArray = require('./create-array');
const evens = require('./evens');

const get = (_arr) => (...pos) => (pos.length === 1) ? _arr[pos] : _arr.slice(...pos);

const withSize = (fn) => (size) => ({
  get: get(createArray(fn)(size))
});

const createArrayWith = (fn) => ({
  withSize: withSize(fn)
});


const result = createArrayWith(evens).withSize(10).get(7);

console.log(result);

const result1 = createArrayWith(evens).withSize(10).get(2, 5);

console.log(result1);
