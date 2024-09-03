class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//linked list implementation
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0 ? true : false;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
    return this.head;
  }

  print() {
    let listValue = ""; 

    if (this.isEmpty()) {
      console.log("list is empty");
      return; 
    } else {
      let temp = this.head;
      while (temp != null) {
        listValue += temp.value + "->";
        temp = temp.next;
      }
    }

    console.log(listValue + "null");
  }

}

const list = new LinkedList();
list.prepend(10);
console.log(list.print());
