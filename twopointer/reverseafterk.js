arr = [1, 2, 3, 4, 5];

function hello(arr) {
  let start = 2;
  let end = arr.length - 1;
  while (start < end) {
    let tempstart = arr[start];
    let tempend = arr[end];
    arr[end] = tempstart;
    arr[start] = tempend;
    start++;
    end--;
  }

  console.log(arr, "arr");
}

hello(arr);
