let obj1 = {
  name: "ravi",
  add: "dehradun",
  def: function () {
    console.log(this, "this");
  },
};

obj1.def();

let obj2 = {
  name: "ravi123",
  add: "dehradun123",
  def123: () => {
    console.log(this, "arrow");
  },
};
obj2.def123();

obj1.def.call(obj2);
console.log(obj1, "obj1");
