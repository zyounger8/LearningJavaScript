//Example

// let count = 0
// let isNotDoneCounting = true

// while(isNotDoneCounting || count < 10){
//     console.log(`The count is: ${}`)
// }

//Example - Game - user still has lives left and has time left to play

// let lives = 3;
// let time = 10;

// while (lives > 0 && time > 0) {
//   //both of these need to be true for the loop to run
//   console.log("Playing the game....");
//   console.log(`Time left ${time} and Lives left: ${lives}`);

//   if (time % 2 === 0) {
//     console.log("You lose one life!");
//     lives--; //if time runs out we will take one life off from the user
//   }

//   if (lives === 0) {
//     // use if instead of ifelse because with ifelse if will only run one check, but we need it to do 2 seperate checks
//     console.log(`Game Over`);
//     break;
//   }

//   time--; // as long as lives is greater than 0 and time greater than 0 you are still able to play the game
// }
// console.log("Go to Main Menu!");

//Example

// let message = "Hello World";

// // for (let i = 0; i < message.length; i++) {
// //   console.log(message[i]);
// // }

// //Short code for code above
// for (character of message) { // message is how many times the loop will go automatically
//   console.log(character);
// }

// Differeny values to String
// value = String(num1) //number
// value = String(2+2) // number operator
// value = String(true) // boolean
// value = String([1,2,3,3,3]) //array

// //String to a number
// value = Number('1242')
// value = parseInt('8364863')
// value = parseFloat('8364.863')

//NaN = Not a Number - JS will give you that if something went wrong in the operation

//Do While Loop

// let i = 0;
// do {
//   console.log("Do while");
//   i--;
// } while (i > 0);

//Practice
// ADD CODE HERE

let addThis = 0;
let sum = 0;

while (addThis < 10) {
  //   console.log(addThis);
  sum += addThis;
  addThis++;
  console.log(sum);
}

// Uncomment the line below to check your work!
// console.log(sum);
