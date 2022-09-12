// ===== Exercise 1

// this one will get hoisted
// function computeArea(width, height) {
//   const area = width * height;
//   return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
// }

// const rect1 = computeArea(5, 2);

// // different ways to run the function
// console.log(computeArea(8, 4)); // shows you the value
// const rect1 = computeArea(5, 2); // stores the value so you can use it later
// console.log(rect1);

// ===== Exercise 2

//this one will not get hoisted
// const planetHasWater = function (planet) {
//   if (planet === "Earth" || planet === "Mars") {
//     return true;
//   } else {
//     return false;
//   }
// };
// //create a variable to hold the value
// const planetEarth = planetHasWater("earth");
// console.log(planetEarth);

// const planetHasWater = function (planet) {
//   if (planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars") {
//     return true;
//   } else {
//     return false;
//   }
// };
// //create a variable to hold the value
// const planetEarth = planetHasWater("Earth");
// console.log(planetEarth);

// ===== Exe3

// function addTwo(num) {
//   num1 = num + 2;
//   return num1;
// }

// console.log(addTwo(8)); // value added here replaces the num

// // ===== Exe 4

// function sayHello(name) {
//   return `Hi ${name}`;
// }

// console.log(sayHello("Anna"));

// ===== Exe 5
// const wereAwesome = (myName, classmateName) =>
//   `${classmateName} and ${myName} are awesome!`;

// console.log(wereAwesome("Zoraida", "Jane"));

// ===== Exe 6

// Option 1
// const addS = (str) => str + "s";
// console.log(addS("Apple"));

// Option 2
// function addS1(str) {
//   return str + "s";
// }
// console.log(addS("Apple"));
// console.log(addS("Banana"));

// Exe 7
const isOdd = function (num) {
  // 5 divided by 2 will have a remainder of 1: it is an odd number
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
};
console.log(isOdd(5));
console.log(isOdd(2));

// ====== Challengaes

//reverse string
function reverseString(str) {
  let reverseStr = ""; //placeholder for the reverse string
  // loop for as long as we have characters in the string
  for (let i = str.length - 1; i >= 4; i--) {
    reverseStr += str[i]; //concat the current character to the variable
  }

  return reverseStr;
}

console.log(reverseString("kayak"));

// ===== capitalize string
const capitalizeString = str => {
    return str[0].toUpperCase() + 
}