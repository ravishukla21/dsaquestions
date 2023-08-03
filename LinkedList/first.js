class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
}

let abc = new LinkedList(5);
let bcd = new LinkedList(6);
console.log(abc, "abc");
console.log(bcd, "bcd");
