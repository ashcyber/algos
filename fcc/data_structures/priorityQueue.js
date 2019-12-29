function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };

  this.enqueue = function(element){
    if(this.isEmpty()){
      this.collection.push(element)
    }else{
      let i = 0; 
      while(i < this.collection.length){
        if(this.collection[i][1] > element[1])
          break; 
        i++; 
      }
      this.collection.splice(i, 0, element); 
 
    }
  }

  this.dequeue = function(element) { 
    return this.collection.pop(); 
  }

  this.isEmpty = function() { 
    return this.collection.length === 0; 
  }

  this.size = function() { 
    return this.collection.length; 
  }
  
}
