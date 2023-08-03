class Node {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  //append
  append(data) {
    let newnode = {
      value: data,
      next: null,
    };
    this.tail.next = newnode;
    this.tail = newnode;
    this.length++;
  }

  //insert first node
  insert(data) {
    let first = {
      value: data,
      next: null,
    };
    first.next = this.head;
    this.head = first;
    this.length++;
  }

  //print datas
  printlist() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const n1 = new Node(100);
n1.append(25);
n1.append(26);
n1.insert(28);
n1.printlist();

console.log(n1);

//insert last node
//insert at index

//get at index
//remove at index
//clear the list
//print the list data
