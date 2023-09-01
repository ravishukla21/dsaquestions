this.a = 5;
console.log(this);

let user = {
  name: "ravi",
  age: 24,
  getdetails() {
    //using normal functions
    console.log(this.name, "name"); //pointing to parent object
    return this.name;
  },
};
let abc = user.getdetails();
console.log(abc, "abc");

let user1 = {
  name: "shukla",
  age: 24,
  getdetails: () => {
    console.log(this); //pointing to global object or window object
    return this.a;
  },
};
let ghi = {
  name: "abc",
  def: user1.getdetails(),
};

console.log(ghi.def, "defgh");
