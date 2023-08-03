// class LinkedList {
//   constructor(data) {
//     this.head = {
//       value: data,
//       next: null,
//       hell: function () {
//         console.log(this, "hello");
//       },
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(data) {
//     let bcd = {
//       value: data,
//       next: null,
//     };
//     this.tail.next = bcd;
//     this.tail = bcd;
//     this.length++;
//   }
// }

// let abc = new LinkedList(25);

// abc.append(26);
// console.log(abc, "abc");
//
//
//
//
//

//questions starts from here
//
//2-->10-->16-->20
//add 4 between 2 and 10
class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(data) {
    let bcd = {
      value: data,
      next: null,
    };
    this.tail.next = bcd;
    this.tail = bcd;
    this.length++;
  }
  leadernode = (index) => {
    console.log(index, "index");
    let req = index - 1;
    let counter = 0;
    let currentnode = this.head;
    while (counter != req) {
      counter++;
      currentnode = currentnode.next;
    }
    return currentnode;
  };
  insert(index, data) {
    const newnode = {
      value: data,
      next: null,
    };
    const leader = this.leadernode(index);
    const nextnode = leader.next;
    leader.next = newnode;
    newnode.next = nextnode;
  }
}

let abc = new LinkedList(2);

abc.append(10);
abc.append(11);
abc.insert(1, 4);

console.log(abc, "abc");
