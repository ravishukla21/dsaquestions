let obj1 = {
  name: "ravi",
  add: "dehradun",
  method1: function abc() {
    return this.name;
  },
};
let obj2 = {
  name: "rahul",
  add: "delhi",
};
let abc123 = obj1.method1.call(obj2);
console.log(abc123, "abc");
let abc = obj1.method1.bind(obj2);
console.log(abc(), "abc");

/////

let userDetails = {
  name: "Ajay Suneja",
  Age: 28,
  Designation: "softwareEngineer",
  printDettails: function () {
    console.log(this.name);
    return this;
  },
};

let abc00 = userDetails.printDettails();
console.log(abc00, "firstname");
let userfamily = {
  totalmemebers: 4,
  girlfriends: 2,
  extraincomesource: "youtube",
  name: "technicalsuneja",
};
//function borrowing
let ghi = userDetails.printDettails.call(userfamily);
console.log(ghi, "secondname");

let ghibind = userDetails.printDettails.bind(userfamily);
console.log(ghibind(), "bindcheck");

let printdetailsssss = function () {
  console.log(this.name, "ssssssss");
};

printdetailsssss.call(userfamily);
printdetailsssss.call(userDetails);
