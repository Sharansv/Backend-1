const _ = require('lodash');

const items = [1, [2, [3, [4]]]]    //1 is items with array value 2 and next item is 2 with their array is 3, etc
const newItems =_.flattenDeep(items);
console.log(newItems);
