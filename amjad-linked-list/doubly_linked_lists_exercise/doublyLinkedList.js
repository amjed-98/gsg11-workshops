function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList(array = []) {
  this.head = null;
  this.tail = null;
  this.length = 0;

  if (Array.isArray(array)) array.forEach((el) => this.push(el));
}

// * insert Last
DoublyLinkedList.prototype.push = function (val) {
  const node = new Node(val);

  if (!this.head) {
    [this.head, this.tail] = [node, node];
  } else {
    [this.tail.next, node.prev, this.tail] = [node, this.tail, node];
  }

  this.length++;
  return this;
};

// * insert first
DoublyLinkedList.prototype.unshift = function (val) {
  const node = new Node(val);

  if (!this.head) return this.push(val);

  [this.head, this.head.prev, node.next] = [node, node, this.head];

  this.length++;
  return this;
};

// * insert at index
DoublyLinkedList.prototype.insert = function (index, val) {
  if (index === 0) return this.unshift(val);
  if (index === this.length) return this.push(val);
  if (index < 0 || index > this.length - 1) return `sorry you just can't do that`;

  let [counter, current, prev] = [0, this.head];

  const node = new Node(val);

  while (counter < index) {
    [prev, current] = [current, current.next];
    counter++;
  }

  [node.next, node.prev, current.prev, prev.next] = [current, prev, node, node];

  this.length++;

  return this;
};

// * get Node
DoublyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index > this.length - 1) return undefined;

  let [counter, current] = [0, this.head];

  while (counter < index) {
    current = current.next;
    counter++;
  }

  return current;
};

// * get node value
DoublyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this.length - 1) return null;

  const { val } = this.getNode(index);
  return val;
};

// * update node value
DoublyLinkedList.prototype.set = function (index, val) {
  if (index < 0 || index > this.length - 1) return undefined;

  this.getNode(index).val = val;
};

// * remove last node
DoublyLinkedList.prototype.pop = function () {
  if (!this.length) return undefined;
  if (this.length === 1) return this.shift();

  let [counter, current] = [1, this.head.next]; // ? exclude first node

  while (counter < this.length - 1) {
    current = current.next;
    counter++;
  }

  [this.tail, current.prev.next] = [current.prev, null];

  this.length--;
  return current.val;
};

//* remove first node
DoublyLinkedList.prototype.shift = function () {
  if (!this.head) return undefined;

  const prevHead = this.head;

  [this.head, prevHead.next] = [this.head.next, null];

  this.length--;

  return prevHead.val;
};

//* remove node
DoublyLinkedList.prototype.remove = function (index) {
  if (index < 0 || index > this.length - 1) return undefined;
  if (index === this.length - 1) return this.pop();
  if (index === 0) return this.shift();

  let [counter, current, prev] = [0, this.head.next]; //? exclude first node

  // ? exclude last node
  while (counter < index - 1) {
    prev = current;
    current = current.next;
    counter++;
  }

  [prev.next, current.next, current.prev] = [current.next, null, null];
  this.length--;

  return current.val;
};

//* reverse list
DoublyLinkedList.prototype.reverse = function () {
  if (this.length === 1) return this;

  let current = this.head;

  while (current) {
    const nextNode = current.next;
    [current.next, current.prev] = [current.prev, current.next];
    current = nextNode;
  }

  [this.head, this.tail] = [this.tail, this.head];

  return this;
};

const list = new DoublyLinkedList();
list.unshift('first Node');
list.insert(1, 'seconde node');
list.insert(2, 'third node');
list.push('last node');
// list.pop();
// list.shift();
list.remove(2);
// console.log(list.head);
// console.log(list.tail);
