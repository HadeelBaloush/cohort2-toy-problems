/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
   var Stack = function() {
    this.stack=[];

   // add an item to the top of the stack
   this.push = function(value){
    this.stack.push(value);
    return this.stack;
  };

   // remove an item from the top of the stack
   this.pop = function(){
    return this.stack.pop();
  };

   // return the number of items in the stack
   this.size = function(){
    return this.stack.length;
  };
}

 /**
   * Queue Class
   */
   var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();

   // called to add an item to the `queue`
   this.enqueue = function(value){
    inbox.push(value);
  };

   // called to remove an item from the `queue`
   this.dequeue = function(){
    if(!outbox.size()){
      while(inbox.size()){
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };

   // should return the number of items in the queue
   this.size = function(){
    return inbox.size()+outbox.size();
   };
 }