class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(hii) {
    const newNode = {
      value: hii,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(data) {
    const newNode = {
      value: data,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
  }
}

let abc = new LinkedList(12);
abc.append(45);
abc.append(455);
abc.prepend(2);
console.log(abc, "abc");
