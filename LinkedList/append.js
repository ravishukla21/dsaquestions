class LinkedList {
  //10-->16-->20
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(data) {
    const newNode = {
      value: data,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}

const abc = new LinkedList(10);

abc.append(16);
abc.append(20);

console.log(abc);
