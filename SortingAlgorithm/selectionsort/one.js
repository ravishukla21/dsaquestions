let arr = [25, 18, 2, 12, 5, 3];

function selectionsort(arr) {}

//selectionsort(arr);

//const arrsort = [5, 6, 7, 1];

//function abc(arr1) {
//arr1.sort();
//return arr1[0];
//}
//let def = abc(arrsort);
//console.log(arrsort, "srrsort");
//console.log(def, "def");

function asim() {
  for (var i = 0; i < 10; i++) {
    function def(i) {
      setTimeout(() => {
        var j = i;
        console.log(j, "j");
      }, 1000);
    }
    def(i);
  }
}

//asim();

function abc() {
  console.log(arguments);
  let abc = { ...arguments };
  return abc;
}
let def = abc(1, 2, 3, 4);
console.log(def);
console.log(Array.isArray(def));
