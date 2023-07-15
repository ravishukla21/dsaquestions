let input = 5;
console.log(recursion(input));

function recursion(input) {
  if (input == 0) {
    return 0;
  }
  if (input == 1) {
    return 1;
  }

  let ans = recursion(input - 1) + recursion(input - 2);
  return ans;
}
