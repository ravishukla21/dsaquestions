//sum of digits
let n = 12;
let sum = 0;
while (n) {
  let x = n % 10; //6
  n = Math.floor(n / 10); //45
  sum = sum + x;
  console.log(sum, "sum");
}
