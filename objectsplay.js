//Use an array inside an object

const adventurer = {
  name: "Timothy",
  hitpoints: 10,
  belongings: ["sword", "potion", "Tums"],
  companion: {
    name: "Velma",
    type: "Bat",
    companion: {
      name: "Tim",
      type: "Parasite",
      belongings: ["SCUBA tank", "Rogan josh", "health insurance"],
    },
  },
};
// console.log(adventurer.belongings[2]);

// Iterate over an array that is within an object

for (i = 0; i < adventurer.belongings.length; i++) {
  console.log(adventurer.belongings[i]);
}

console.log(adventurer.companion.type);

console.log(adventurer.companion.companion.type);

console.log(adventurer.companion.companion.belongings[2]);

// ===== Use an array of objects

const movies = [{ title: "Tokyo Story" }, { title: "Paul Blart: Mall Cop" }];

console.log(movies[0]);
console.log(movies[0].title);

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].title);
}
