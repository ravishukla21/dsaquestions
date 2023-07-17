let arr = [0, 1, 1, 4, 4, 4, 5, 6];
//for binary search array must be sorted
console.log(firstandlastoccuranceleft(arr));
function firstandlastoccuranceleft(arr) {
  console.log(arr, "arr");
  let key = 4;
  let s = 0;
  let e = arr.length - 1;

  mid = s + (e - s) / 2;
  let ans = -1;
  while (s <= e) {
    if (arr[mid] == key) {
      ans = mid;
      e = mid - 1;
    } else if (arr[mid] > key) {
      e = mid - 1;
    } else if (key > arr[mid]) {
      s = mid + 1;
    }
    mid = s + (e - s) / 2;
  }
  return ans;
}
