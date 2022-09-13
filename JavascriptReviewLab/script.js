// ===== 1. Variables and Datatypes =====

/* A Q&A
How do we assign a value to a variable?
How do we change the value of a variable?
How do we assign an existing variable to a new variable?
Remind me, what are declare, assign, and define?
What is pseudocoding and why should you do it?
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
*/

// ===== B. Strings =====

let firstVariable;
firstVariable = "Hello World";

firstVariable = 8;

let secondVariable = firstVariable;

secondVariable = "Practice Makes Perfect";

let yourName = "Zoraida";

console.log(firstVariable);
console.log(secondVariable);
console.log("Hello, my name is " + yourName);

// ===== C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Kevin" === "Kevin");
// FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true )
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()

// ===== D. The Farm
let animal = "cow";

if (animal === "cow") {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow");
}

// ===== Drivers Ed =====

// Make a variable that holds a person's age; be semantic

let age = 40;

/*Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."*/

if (age >= 16) {
  console.log("Here are the keys!");
} else if (age < 16) {
  console.log("Sorry, you're too young.");
}

// ===== Loops

// ===== A. The Basics

//Write a loop that will print out all the numbers from 0 to 10, inclusive

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

/* Write a loop that will print out all the numbers from 10 up to and including 400 */

for (let a = 10; a <= 400; a++) {
  console.log(a);
}

/* Write a loop that will print out every third number starting with 12 and going no higher than 4000 */

for (let b = 12; b <= 4000; b++) {
  if (b % 3 === 0) {
    console.log(b);
  }
}

// =====B. Get Even

// Print out the numbers that are within the range of 1 - 100

/* Adjust your code to add a message next to even numbers only that says: "<-- is an even number" */
for (let c = 1; c <= 100; c++) {
  if (c % 2 === 0) {
    console.log(`${c} <-- is an even number`);
  } else {
    console.log(c);
  }
}

// ===== C. Give me Five

/*For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five 
Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
For numbers divisible by both three and five, be sure your code prints both messages*/
// let fiverr = `I found a ${d}. High five!`;
// let treclub = `I found a ${d}. Three is a crowd!`;

for (let d = 0; d <= 100; d++) {
  if (d % 5 === 0 && d % 3 === 0) {
    console.log(
      `I found a ${d}. High five! ` + " " + `I found a ${d}. Three is a crowd!`
    );
  } else if (d % 5 === 0) {
    console.log(`I found a ${d}. High five!`);
  } else if (d % 3 === 0) {
    console.log(`I found a ${d}. Three is a crowd!`);
  }
}

// ===== D. Savings Account

/* Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it. */

let bank_account = 0;

for (let e = 0; e <= 10; e++) {
  bank_account += e;
  console.log(bank_account);
}

/*You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.*/
let bank_account2 = 0;

for (let i = 1; i <= 100; i++) {
  bank_account2 += i;
  console.log(bank_account2 * 2);
}

// ===== Arrays and Control flow

/* 
 ========= A. Talk about it:
What are the things in an array called? Elements
Do Arrays guarantee those things will be in order? No
What real-life thing could you model with an array? List of Groceries
*/

// Create an array that contains three quotes and store it in a variable called quotes

const quotes = [
  "You only live once",
  "Go hard or go home",
  "How bout dem cowboys",
];

/*
C. Accessing elements
Given the following array: 
*/
const randomThings = [1, 10, "Hello", true];

/*
1. How do you access the 1st element in the array? 
=== ANSWER === > Using the index number 0 in square bracket after the variable, you could use the following code console.log(randomThings[0])

2. Change the value of "Hello"to "World"
*/

randomThings[2] = "World";

/*
3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
*/
console.log(randomThings);

/*
===== D. Change values
Given the following array:
*/
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

//1. What would you write to access the 3rd element of the array?
console.log(ourClass[2]);

//2. Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
console.log(ourClass);

//3. Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

// ===== E. Mix Up

//Given the following array:

const myArray = [5, 10, 500, 20];

// 1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.

myArray.push("Aegon", "final");
console.log(myArray);

// 2. Remove the 5from the beginning of the array.

myArray.shift();
console.log(myArray);

// 3. Add the string "Bob Marley"to the beginning of the array.

myArray.unshift("Bob Marley");
console.log(myArray);

// 4. Remove the string of your choice from the end of the array.
myArray.splice(5, 1);
console.log(myArray);

/* 5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything? */
myArray.reverse();
console.log(myArray);
