function greet(name) {
  //parameter =>at the time of declarations
  console.log("hello world" + name);
}

greet("ravi"); //argument

// function declarations
function calcRectArea(width, height) {
  return width * height;
}

console.log(calcRectArea(5, 6));
// Expected output: 30

//functionexpression
const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// Expected output: 12
