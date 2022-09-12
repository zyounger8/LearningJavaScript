// ===== Exercise 1

// const horror = ["Freddy", "Jason", "Michael", "Ghostface", "Chucky"];

// // ADD CODE HERE
// let fourthItem = horror[3];

// // Write a console.log statement below to check your work!
// console.log(fourthItem);

// ===== Exercise 2

// const netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// // ADD CODE HERE

// netflixShows.push("On My Block");

// // Write a console.log statement below to check your work!
// console.log(netflixShows);

// // ===== Exercise 3

// const synonyms = ["fantastic", "wonderful", "great"];
// const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array.
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE

// for (i = 0; i < synonyms.length; i++) {
//   greetings.push(synonyms[i]);

//   console.log(`Have a ${synonyms[i]} day!`);
// }

// 2.
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE

// for (i = 0; i < greetings.length; i++) {
//   //   synonyms.push(greetings[i]);

//   console.log(`Don't have a ${greetings[i]} day!`);
// }

// === Exercise 4

// const increaseByTwo = [1, 2, 3, 4, 5];
// // ADD CODE HERE

// for (i = 0; i < increaseByTwo.length; i++) {
//   increaseByTwo[i] += 2;
// }

// // Uncomment the line below to check your work!

// console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];

// ===== Exercise 5

// const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// // // ADD CODE HERE
// for (i = 0; i < timesTenIfOverFive.length; i++) {
//   if (timesTenIfOverFive[i] >= 5) {
//     timesTenIfOverFive[i] *= 10;
//   }
// }

// // Uncomment the line below to check your work!
// console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]

// ===== For Each Array Exercise

// ADD CODE HERE

// Uncomment these to check your work!
// console.log(typeof forEach); // should log: 'function'
// forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
// console.log(typeof map); // should log: 'function'
// console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]

// ===== Map Array Exercise
//- this is javascript source code, building functionality/source code from javascript

// ADD CODE HERE

// let b = 3;

// function subtractTwo(b) {
//   return subtractTwo - 2;
// }

// function map(array, callback) {
//   let newArray = [];
//   for (i = 0; i < array.length; i++) {
//     let result = callback(array[i]);
// newArray.push(result); // push the result into the new array
// }
// return newArray; //outside the loop because it you have it inside its going to loop over every single time
// }

// map([3, 4, 5], subtractTwo); //-> [1,2,3]
// subtractTwo(10); //-> 8
// subtractTwo(12); //-> 10

// Uncomment these to check your work!
// console.log(typeof subtractTwo); // should log: 'function'
// console.log(typeof map); // should log: 'function'
// console.log(map([3, 4, 5], subtractTwo)); // should log: [ 1, 2, 3 ]

// for each challenge
// const recreateForEach = (array, callback) => {
//   //loop over the array
//   //call the callback on each of the elements inside the array
//   // letters is the array char is the callback

//   let alphabet = "";
//   const letters = ["a", "b", "c", "d"];

//   recreateForEach(letters, function (char) {
//     alphabet += char;
//     for (i = 0; i < letters.length; i++) {
//       char(letter[i]);
//     }
//   });
//   console.log(alphabet); //prints 'abcd'
// };

// ==== One answer

// const recreateForEach = (array, callback) => {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     const result = callback(array[i]);
//     newArray.push(result);
//   }
//   return newArray;
// };

// let alphabet = "";
// const letters = ["a", "b", "c", "d"];
// recreateForEach(letters, function (char) {
//   alphabet += char;
// });
// console.log(alphabet);

recreateMap([3,4,5], subtractTwo); //-> [1,2,3]
subtractTwo(10); //-> 8
subtractTwo(12); //-> 10

// ADD CODE HERE

const subtractTwo = function (num){
    return num - 2
}
const recreateMap (array , cb) {
 let newArr = []
    subtractTwo(array, function())
return newArr
}   
}




// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof recreateMap); // should log: 'function'
console.log(recreateMap([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]