// Part II

// Yell at the Ninja Turtles

// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for (const i of ninjaTurtles) {
//   console.log(i.toUpperCase());
// }

/////////////////
// Excited Kitten
/////////////////
const catResponse = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];
let lonelyKitten = "Love me, pet me! HSSSSSS!";

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(catResponse[Math.floor(Math.random() * 3)]);
  } else {
    console.log(lonelyKitten);
  }
}

///////////////////
// Find the Median
//////////////////

const num = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

num.sort();
let median = (arr) => Math.floor(arr.length / 2);
console.log(num.slice(12, 13));
console.log(median(num));

/////////////////////
// Hungry for More
////////////////////