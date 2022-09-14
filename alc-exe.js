//////////////
// Easy Going
//////////////

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

//////////////
// Get Even
/////////////

for (i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//////////////
// Fizz Buzz
/////////////

for (i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//////////////////
// Wild Wild Life
/////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// Number 1
plantee[2] = 5001;
console.log(plantee);
// Number 2
wolfy[3] = "Gotham City";
console.log(wolfy);
// Number 3
dart.push("Hawkins");
console.log(dart);
// Number 4
wolfy.shift();
wolfy.unshift("Gameboy");
console.log(wolfy);

///////////////////
//Yell at the Ninja Turtles
//////////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (const i of ninjaTurtles) {
  console.log(i.toUpperCase());
}

//////////////////////
// Methods, Revisited
/////////////////////

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

// console.log(favMovies.indexOf("Titanic"));

// // 1
// console.log(favMovies.sort());
// // 2
// console.log(favMovies.pop());
// // 3
// console.log(favMovies.push("Guardians of the Galaxy"));
// // 4
// console.log(favMovies.reverse());
// // 5
// console.log(favMovies.shift());
// 6
console.log(favMovies.unshift());
// 7
console.log(favMovies.length);
console.log(favMovies.indexOf("Django Unchained"));
console.log(favMovies.splice(3, 1, "Avatar"));
console.log(favMovies);

// 8
console.log(favMovies.length / 2);
console.log(favMovies.slice(9, 19));
console.log(favMovies);

// 9
const halfMovies = favMovies.slice(9, 19);
console.log(halfMovies);
// 10
console.log(favMovies);
// 11
console.log(favMovies.indexOf("Fast and Furious"));

///////////////////
// Where is Waldo
//////////////////

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

// 1
console.log(whereIsWaldo.splice(1, 1));
console.log(whereIsWaldo);
// 2
whereIsWaldo[1][2] = "No One";
// 3
console.log(whereIsWaldo[2][1][1]);

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