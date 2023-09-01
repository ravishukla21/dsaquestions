// 2. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor() {
    (this.width = 25),
      (this.height = 2),
      (this.area = () => {
        return this.width * this.height;
      });
    this.perimeter = () => {
      return this.width * 2 + this.height * 2;
    };
  }
}

let abc = new Rectangle();
console.log(abc, "abc");
let bcd = abc.area();
console.log(bcd, "area");
let per = abc.perimeter();
console.log(per, "per");
