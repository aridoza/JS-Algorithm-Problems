// Add Two Numbers
// Q: You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list
// You can assume the two numbers do not contain any leading zero, except the number 0 itself.
// Ex: input: (2 -> 4 -> 3) + (5 -> 6 -> 4);  output: 7 -> 0 -> 8

// my solution
// need to reverse the sets of linked-lists first, then add each item together by index/position
// if the sum of the 2 numbers is 10, make it a '0' in that slot

numberAdder = (list1, list2) => {
  // must use 'function' syntax; doesn't work with ES6 arrow syntax
  function LinkedList () {
    this.head = null;
  }

  LinkedList.prototype.reverseLinkedList = function() {
    // Empty or a single element Linked List
    if (!this.head || !this.head.next) {
      console.log('No duplicates were found. Empty or a single element Linked List.');
      return;
    }
    let p1 = null;
    let p2 = this.head;
    let p3;

    while (p2) {
      p3 = p2.next;
      p2.next = p1;
      p1 = p2;
      p2 = p3;
    }

    this.head = p1;
  }

  LinkedList.prototype.insertNodeAtTail = (val) => {
    let node = {
      data: val,
      next:null
    };

    if (!this.head) {
      this.head = node;
    } else {
      let p1 = this.head;
      while (p1.next) {
        p1 = p1.next;
      }
      p1.next = node;
    }
  };

  // Three nodes
  let L1 = new LinkedList();
  L1.insertNodeAtTail(list1[0]);
  L1.insertNodeAtTail(list1[1]);
  L1.insertNodeAtTail(list1[2]);

  L1.reverseLinkedList();
  console.log(L1.value);


  // // Create an instance of a LinkedList class
  // let L1 = new LinkedList();
  // let L2 = new LinkedList();
  //
  // // Create a linked list with three elements for first list
  // L1.insertNodeAtTail(list1[0]);
  // L1.insertNodeAtTail(list1[1]);
  // L1.insertNodeAtTail(list1[2]);
  //
  // // Create a linked list with three elements for second list
  // L1.insertNodeAtTail(list2[0]);
  // L1.insertNodeAtTail(list2[1]);
  // L1.insertNodeAtTail(list2[2]);
  //
  // console.log(L1);
  // console.log(L2);

}
