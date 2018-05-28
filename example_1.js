const createArray = require('./create-array');

const createArrayWithFixed = createArray(() => 2);
const result = createArrayWithFixed(20);

console.log(result);
