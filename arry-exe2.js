// ADD CODE HERE

function recreateforEach(array, cb) {
  for (i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}
const recreateMap = (array, callback) => {
  let newArr = [];
  recreateforEach(array, function (item) {
    newArr.push(callback(item));
  });
  return newArr;
};

// Uncomment these to check your work!
console.log(typeof recreateforEach); // should log: 'function'
recreateforEach(["a", "b", "c"], (i) => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof recreateMap); // should log: 'function'
console.log(recreateMap([3, 4, 5], (n) => n - 2)); // should log: [1, 2, 3]
