//pallandromic timecomplexity becomes half

let num = "12321";
let abc = number(num);
function number(num) {
  console.log(num, "num");
  let len = num.length;
  console.log(len, "len");
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (num[i] != num[len - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(abc, "abc");
if (abc) {
  console.log("pall");
} else {
  console.log("false");
}

//pallndromic if a number is given
const input1 = 1234;
let str_input1 = input1.toString(); //conversion of int to string
str_input1 = str_input1.split("").reverse().join(""); // reversing the input string
if (str_input1 === input1.toString()) {
  //Checking for Palindrome
  console.log(`${input1} is Palindrome`);
} else {
  console.log(`${input1} is not Palindrome`);
}

//palllindrome reverse the digits
let n3 = "124";
n2 = n3;
let sum = 0;

while (n2) {
  let xi = n2 % 10;
  sum = sum * 10 + xi;
  n2 = Math.floor(n2 / 10);
}
console.log(sum, typeof sum, "sum123");
let ans123 = sum.toString();
console.log(typeof ans123, ans123);
console.log(n3, "n3");

if (ans123 == n3) {
  //   console.log(typeof ans123, ans123);
  console.log("pallindromic");
} else {
  //   console.log(typeof ans123, ans123);
  console.log("not pallindromic");
}
