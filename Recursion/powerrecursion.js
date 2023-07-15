function power(y) {
  if (y == 0) {
    return 1;
  } else {
    return 2 * power(y - 1);
  }
}

console.log(power(3));

// function hello(n) {
//   if (n == 1) {
//     return 0;
//   }
//   return hello(n - 1);
// }
// console.log(hello(5));
