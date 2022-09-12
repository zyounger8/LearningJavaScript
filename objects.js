const car = {
  interiorColor: "blue",
  hp: 4000,
  year: 1989,
  isElectric: false,
};

console.log(car.hp);
car.engine = "v20";
console.log(car.engine);

//updating the property engine
car.engine = "v28";
car.color = "Hot Pink";

console.log(car);

car.isElectric = true;

if (car.isElectric) {
  console.log("Yes the car is Electric");
} else {
  console.log("Nope you need gas!");
}

car.year = 2015;

if (car.year <= 1960) {
  console.log("Hey thats a classic");
} else if (car.year <= 2000) {
  console.log("Hey that car is getting old");
} else {
  console.log("Wow nice car!");
}

// ==== Use object properties with conditionals

// const obj = {
//   salutation: 'hi',
//   count:4
// }

// Use arrays inside an object

const coder = {
  name: "Anna",
  company: "Google",
  joinedCompany: 2021,
  languages: ["C", "C++", "C#", "Ruby"],
  greeting: function (name, message = "World") {
    // World is the default value
    console.log(`Hello, ${name} ${message}`);
  }, //when functions are inside an object we refer to them as methods, so greeting is a method of coder - you can use the message greeting to show the message at the bottom
};

coder.greeting("Alex", "everyone!");
coder.greeting("Alex");

delete coder.company;

console.log(coder);

// ===== Bracket Notation

//Array

const playlist = [];

const song1 = {
  songName: "My Song",
  artist: "Mike",
  genre: "Hip Hop",
  songLength: 120,
  writers: ["Yishaq", "Jude", "Deja"],
};

const song2 = {
  songName: "My Song2",
  artist: "John",
  genre: "Classic",
  songLength: 90,
  writers: ["Ronnie", "Mo", "Nelia"],
};

playlist.push(song1);
playlist.push(song2);

console.log(playlist[1]);
console.log(playlist[1].songName);
