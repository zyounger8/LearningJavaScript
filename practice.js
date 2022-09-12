// Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions:

// For numbers divisible by 3, print "Fizz" instead of the number
// For numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz",
// for numbers that are divisible by both 3 and 5.
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   if (i === 3) {
//     continue;
//   }
//   if (i % 3 === 0) {
//     break;
//     console.log(`Fizz`);
//   }
//   if (i % 5 === 0) {
//     console.log(`Buzz`);
//   }
// }

// for (let i = 1; i < 101; i++) {
//   if (i % 3 === 0) {
//     console.log(`Fizz`);
//     continue;
//   }
//   if (i % 5 === 0 && i % 3 === 1) {
//     console.log(`Buzz`);
//   }
// }

// let Fizz;
// let Buzz;

for (i = 1; i < 101; i++) {
  // console.log(i);
  //print 1-100 and skip numbers divisible by 3 with no remainder
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    // and if can .. print ..
    console.log("Fizz");
  }
  // print Buzz for the numbers that are divisible by 5
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  //print FizzBuzz for numbers / 3 & 5
  else {
    console.log(i);
  }
}
