class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let listvalues = [];
      while (curr) {
        listvalues.push(curr.value);
        //listvalues+=`${curr.value}`
        curr = curr.next;
      }
      console.log(listvalues);
    }
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index == 0) {
      this.prepend(value);
    }
    if (index > 0) {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removefrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removenode;
    if (index == 0) {
      removenode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removenode = prev.next;
      prev.next = removenode.next;
    }
    this.size--;
    return removenode.value;
  }
}

const list = new LinkedList();

console.log(list.isEmpty(), "isempty");
console.log(list.getSize(), "size12");
list.print();
list.prepend(25);
list.print();
list.prepend(26);
list.prepend(27);
list.append(2789);
list.prepend(10001);
list.insert(10, 5);
list.insert(20, 0);

console.log(list.removefrom(10));
list.print();
console.log(list.getSize(), "after");
console.log(list.removefrom(0));
list.print();
