//first class functions are those functions which are treated as a variable in a programming language
//1.for example we can pass the function as an argument in another function
//2.returned by another function
//3.can be assigned as a value to a variable.

//3

const third = () => {
  console.log("assigned as a value to a variable");
};

third();

//2,1

function second() {
  return "hello world";
}

function sec(abra) {
  console.log(
    abra() + "returned by another function and pass a functio as an argument"
  );
}

sec(second);
