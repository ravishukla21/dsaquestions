// function counting(n = 5) {
//   console.log(n);
// }

// counting(n);
// var n = 52;

//5-4-3-2-1
// function count(n = 5) {
//   if (n == 0) {
//     return 1;
//   }
//   console.log(n);
//   return count(n - 1);
// }

// count(5);
// console.log(count(5));
// console.log(count(0));

//forward

function count(n = 5) {
  if (n == 0) {
    return 1;
  }
  count(n - 1);

  console.log(n);
}

count(5);
