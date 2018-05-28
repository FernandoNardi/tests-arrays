const createArray = require('./create-array');
const evens = require('./evens');
const odds = require('./odds');

const createArrayWith = (fn) => createArray(fn);

const withSize = (size, create) => create(size);

const take = (pos, arr) => (pos.map) ? arr.slice(...pos) : arr[pos];


const result = take([2, 5], withSize(10, createArrayWith(evens)));
console.log(result);

const result1 = take([2], withSize(10, createArrayWith(odds)));
console.log(result1);

const result2 = take(2, withSize(10, createArrayWith(() => 2)));
console.log(result2);
