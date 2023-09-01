// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

//JavaScript Classes are templates for JavaScript Objects.A JavaScript class is not an object.

// It is a template for JavaScript objects.

// The Constructor Method
// The constructor method is a special method:

// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties
// If you do not define a constructor method, JavaScript will add an empty constructor method

class ABRA {
  constructor(hi) {
    this.add = "dehradun";
    this.name123 = hi;
    console.log("parent class");
  }
}

class DABRA extends ABRA {
  //child class
  constructor(name) {
    super("klifg"); // link parent class ABRA to child class DABRA
    this.name = name;
    console.log("darealkafdjlkj");
  }
}

let dbc = new DABRA("ravi");
console.log(dbc, "dbc");
let hij = new ABRA("tattttt");
console.log(hij, "hijk");
