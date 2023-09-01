let arr = [1, 2, 3, 4, 5, 5, 6];
//using while loop

let ans123 = traverse(arr);

function traverse(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let tempstart = arr[start];
    let tempend = arr[end];
    arr[end] = tempstart;
    arr[start] = tempend;
    start++;
    end--;
  }
  return arr;
}
console.log(ans123, "ans123");

//using for loop
