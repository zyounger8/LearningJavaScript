// ===== Splice

// const months = ["Jan", "March", "April", "June"];

// months.splice(1, 0, "Feb"); // 0 wont delete anything, instead will only insert the value
// console.log(months);

// ===== For Each

// const latestShows = [ 'Caddyshack' , 'Interstellar' , 'Scarface' , 'Trading Places' ]

// latestShows.forEach(function(show) => {
//     console.log(show)
// })

// NOTE: for each is a built in loop that is going to take a function
// for each is used more commonly than for loop
// we will get an even better method than for each

// ===== Example 1
// const numArr = [2, 345, 34, 12, 2334, 5, 67, 7, 45];

// numArr.forEach((num) => {
//   console.log(num * 10);
// });

// ===== Example 2

const numArr = [2, 345, 34, 12, 2334, 5, 67, 7, 45];

numArr.forEach((num, idx) => {
  console.log(`${num} is at index: ${idx}`);
});
// NOTE: behaves like a for loop but does the hard work of defining the loop for us
