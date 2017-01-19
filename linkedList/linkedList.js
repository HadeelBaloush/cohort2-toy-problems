/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  this.head = null;
  this.tail = null;
  this.listLength = 0;

};

//write methods here!

LinkedList.prototype.addToTail = function(value) {
	var node = Node(value);
	if(this.head === null){
		this.head = node;
		this.tail = node;
		this.listLength++;
	}
	else{
		this.tail.next = node;
		this.tail = node;
		this.listLength++;
	}
}

LinkedList.prototype.removeHead = function() {
	var headValue = this.head;
	this.head = this.head.next;
	this.listLength--;
	return headValue.value;
}


LinkedList.prototype.contains = function(target){
	var current = this.head;
	for (var i = 0; i < this.listLength; i++) {
		if(target === current.value){
			return true;
		}
		current = current.next;
	}
	return false;
}

var Node = function(value){
	return{
		value: value,
		next: null
	};
}