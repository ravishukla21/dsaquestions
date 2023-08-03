//sort 2d array

let arr = [
  [1, 2],
  [1, 3],
  [2, 10],
  [2, 5],
  [3, 2],
  [4, 2],
];

let comparefn = (a, b) => {
  if (a[0] == b[0]) {
    return a[1] - b[1];
  }

  return a[0] - b[0];
};
arr.sort(comparefn);
console.log(arr, "arr");
