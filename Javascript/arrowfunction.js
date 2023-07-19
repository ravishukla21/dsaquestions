let hello = () => {
  console.log("hello");
};

hello();

let hello12 = (a = 25) => a / 2;
a = hello12(46);

console.log(a);

let obj = {
  greet: "hihello",
  arr: ["ram", "shyam", "panditji"],
  speak() {
    // let greet = "greetings from masai"; //why? not printed
    greet = "greetings from masai"; //it prints
    this.arr.map(function (arrs) {
      console.log(this.greet + " " + arrs + "  " + "  arrinside");
    });
    this.arr.map((arrs) => {
      // arrow function will take this of parent
      console.log(this.greet + " " + arrs + "  " + "  arrinside");
    });
  },
  arr12: "ji",
};

obj.speak();
