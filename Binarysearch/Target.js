const arr = [1, 2, 3, 4, 5, 7, 8, 9];
let target = 10;
function abc() {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    console.log(start, end, "Start +end ");
    let middle = Math.floor((start + end) / 2);
    console.log(middle, "middle element in the array");
    if (arr[middle] > target) {
      end = middle-1;
  
      console.log(end, start, " greater than target");
    } else if (arr[middle] < target) {
     
      start = middle+1;
      console.log(end, start, "less than target");
    } else if (arr[middle] == target) {
      console.log(arr[middle], "return taget");
      return middle;
    } 
  }
  return -1;
}
const def = abc();
console.log(def, "def");
