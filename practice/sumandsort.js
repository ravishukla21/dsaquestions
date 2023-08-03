// Given an array of N space-separated integers you have to sort the array in non-decreasing order of their sum of digits and if two numbers have same sum of digits then the smaller number comes first.
let arr = [1, 22, 10, 4, 11];
let ans12 = [];
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  let sum = 0;

  while (num) {
    let x = num % 10;
    num = Math.floor(num / 10);
    sum = sum + x;
  }
  console.log(sum, arr[i], "sum");
  ans12.push([sum, arr[i]]);
}
console.log(ans12, "ans12");

let sortfunction = (a, b) => {
  if (a[0] == b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
};
ans12.sort(sortfunction);

console.log(ans12, "ans12final");
