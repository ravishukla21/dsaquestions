// 1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
  constructor(name, age, country) {
    (this.name = name),
      (this.age = age),
      (this.country = country),
      (this.show = () => {
        console.log(this.name, this.age, this.country);
      });
  }
  displaydetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Country: ${this.country}`);
  }
}

let abc = new Person("ravi", 28, "India");
console.log(abc);
abc.show();
abc.displaydetails();
