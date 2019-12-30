function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){

    let newNode = new Node(element); 
    if(head === null){
      head = newNode; 
    }else{
      let curNode = head; 

      while(curNode.next !== null){
        curNode = curNode.next; 
      }

      curNode.next = newNode; 
    }

    this.size = function() { 
      let len = 0; 
      let curNode = head; 
      while(curNode){
        curNode = curNode.next; 
        len++; 
      }
      return len; 
    }

  };
}
