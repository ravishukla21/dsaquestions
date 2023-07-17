// let array = [0, 1, 3, 4, 5, 8, 9];
// console.log(findelements(array));

// function findelements(array) {
//   let start = 0;
//   let end = array.length - 1;
//   mid = (start + end) / 2;
//   key = 4;

//   while (start <= end) {
//     if (array[mid] == key) {
//       // index return
//       return mid;
//     }

//     if (array[mid] > key) {
//       end = mid - 1;
//     }
//     if (array[mid] < key) {
//       start = mid + 1;
//     }
//     mid = (start + end) / 2;
//   }
//   return -1;
// }

// JavaScript program to find first
// and last occurrences of a
// number in a given sorted array

// if target is present in nums[] then
// returns the index of FIRST
// occurrence and last occurrence of target in
// nums[0..n-1], otherwise returns -1

function search(nums, target, findStartIndex) {
  let ans = -1;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    // find the middle element
    let mid = Math.floor(start + (end - start) / 2);
    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      // potential ans found
      ans = mid;
      if (findStartIndex) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return ans;
}

// Driver program
let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
let n = arr.length;
let x = 8;
let ans = [-1, -1];

// For first occurrence
ans[0] = search(arr, x, true);
if (ans[0] != -1) {
  // For last occurrence
  ans[1] = search(arr, x, false);
}

console.log("First Occurrence =", ans[0]);
console.log("Last Occurrence =", ans[1]);

///

let arr12 = [1, 2, 3, 4, 4, 5, 6, 7];
let key12 = 4;
let n12 = arr12.length;
console.log(first(arr12, key12, n12));
function first(arr12, key12, n12) {
  let ans12 = -1;
  let s = 0;
  let e = arr12.length - 1;
  let mid12 = Math.floor(s + (e - s) / 2);
  while (s <= e) {
    if (key12 == arr12[mid12]) {
      ans12 = mid12;
      e = mid12 - 1;
    } else if (key12 < arr12[mid12]) {
      e = mid12 - 1;
    } else if (key12 > arr12[mid12]) {
      s = mid12 + 1;
    }

    mid12 = Math.floor(s + (e - s) / 2);
  }
  return ans12;
}
