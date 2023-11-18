let arr = [1, 3, 5, 7, 8, 9];

let x = 7;
//using while loop
//let recursivefunction = function (arr, x, start, end) {
// while (start <= end) {
//   let mid = Math.floor((start + end) / 2);

//  console.log(mid, "midvalue");
//  if (x == arr[mid]) {
//    return arr[mid];
//} else if (x > arr[mid]) {
// start = mid + 1;
//} else if (x < arr[mid]) {
//end = mid - 1;
//}
//}
//return "not found";
//};

//console.log(recursivefunction(arr, x, 0, arr.length - 1));

//using recursion
let recursion = function (arr, x, start, end) {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] == x) return arr[mid];

  if (arr[mid] > x) {
    return recursion(arr, x, start, mid - 1);
  } else if (arr[mid] < x) {
    return recursion(arr, x, mid + 1, end);
  }
};

if (recursion(arr, x, 0, arr.length - 1)) {
  console.log("element found", recursion(arr, x, 0, arr.length - 1));
} else {
  console.log("element not found");
}
