const subtractTwo = (num) => {
  return num - 2;
};

const recreateMap = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i]);
    newArray.push(result);
  }
  return newArray;
};

// ADD CODE HERE

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof recreateMap); // should log: 'function'
console.log(recreateMap([3, 4, 5], subtractTwo)); // should log: [ 1, 2, 3 ]
