// const message = "Hello World!";
// console.log(message.length);

// for (let i = 0; i < message.length; i++) {
//   console.log(message[i]);
// }

// for (let i = 0; i <= message.length; i++) {
//   console.log(message.length); // counts the number of characters in the string
//   console.log(message[0]); //computers start index at 0
// }

// const message = "Hello World!!!";
// console.log(message.length);

// for (let i = 0; i < message.length; i++) {
//   console.log(message[i]);
// }

// for (let i = message.length - 1; i >= 0; i--) {
//   console.log(message[i]); //need square brackets to give us access to the index, what ever you put in the bracket is the variable you want
// }

//Example

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }

//Example

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     continue; //skips the loop
//   } else if (i === 8) {
//     break; //stops the loop
//   }

//   console.log(`${i} * 2 = ${i * 2}`);
// }

//Example
// let reverse = 1;

// if (reverse) {
//   console.log("true");
// } else {
//   console.log("false");
// }

//Example
// const word = "apple";
// let reversed = "";

// // [4] o
// // [3] l
// // [2] l
// // [1] e
// // [0] H
// // want to stop at zero as long as i is greater than or equal to zero
// // word.length is 5 so we need to subtract 1 to get 4 for i
// // i-- we want to decrease by one increment to get to zero

// // for (let i = word.length - 1; i >= 0; i--) {
// //   console.log(word[i]);
// // }

// for (let i = word.length - 1; i >= 0; i--) {
//   reversed += word[i];
//   console.log(reversed);
// }

//Exercise 1 - Breakout group
//Write a loops that outputs 1,3,5,7,9,2,4,6,8,10

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
  if (i === 10) {
    for (let i = 1; i <= 10; i++)
      if (i % 2 == 0) {
        console.log(i);
      }
  }
}

//Exercise 2 Write a loop that counts down from 10 to 1. - Complete

for (let i = 10; i <= 10; i--) {
  console.log(i);
  if (i === 1) {
    break;
  }
}

//Exercise 3 Write a loop that outputs multiples of 3 starting at 6 and ends at 60. - Complete

for (let i = 0; i <= 60; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

//Exercise 4 Using the remainder % operator, write a loop that iterates between 0 and 10 and prints all even numbers.

for (i = 0; i <= 10; i++) {
  if (i % 2 === 0) console.log(i);
}

//Exercise 5 - Complete

const word = "#######";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
  console.log(reversed);
}

// Other answer
let sign2 = "";
for (let i = 0; i <= 6; i++) {
  sign2 += ["#"];
  console.log(sign2);
}

// Exercise 6 - Write a loop that prints integers in multiples of 3 as long as integers are less than 35. (The product of 3 and any integer is a multiple of 3. The first few multiples of 3 are 3, 6, 9, 12, 15, 18, 21, 24, 27, 30 and so on.)

for (let amigos = 3; amigos <= 35; amigos++) {
  if (amigos % 3 === 0) {
    console.log(amigos);
  }
  if (amigos === 35) {
    break;
  }
}

// Exercise 7 - Write a loop that prints integers in multiples of 5 as long as integers are less than 100. (The product of 5 and any integer is a multiple of 5. The first few multiples of 5 are 5, 10, 15, 20, 25, 30, and so on.)

for (let guys = 5; guys <= 100; guys++) {
  if (guys % 5 === 0) {
    console.log(guys);
  }
  if (guys === 100) {
    break;
  }
}

// Exercise 8 - Write a loop that prints integers between 0 and 20. All numbers divisible by 2 should be multiplied by 3 before they are output. All other integers should not be output. Hint: use Modulo

for (let dos = 0; dos <= 20; dos++) {
  if (dos % 2 === 0) {
    console.log(dos * 3);
  }
}
