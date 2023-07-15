//to print factorial of a number using bruteforce approach
let n = 5; //5*4*3*2*1=120
console.log(factorial(n));

function factorial(n) {
  let answer = 1;
  //0!=1 and 1!=1
  if (n == 0 || n == 1) {
    return answer;
  } else if (n > 1) {
    for (let i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  } else {
    return "not possible";
  }
}
