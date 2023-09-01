class ABRA {
  constructor() {
    (this.name = "ravi"),
      (this.place = "deharadun"),
      (this.calling = () => {
        console.log(`${this.name}`);
      });
  }

  callit() {
    console.log(`my name is ${this.name} and i live in ${this.place}`);
  }
}

let abc = new ABRA();
console.log(abc);
abc.calling();
abc.callit();
