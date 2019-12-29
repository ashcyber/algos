class Set {
  constructor() {
  // collection will hold our set
  this.collection = [];
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
      return this.collection.indexOf(element) !== -1;
  }
  // this method will return all the values in the set
  values() {
      return this.collection;
  }
  // change code below this line
  
  // write your add method here
  add(element){
    if(this.has(element)){
      return false; 
    }else{
      this.collection.push(element); 
      return true; 
    }
  }

  // write your remove method here
  remove(element){
    if(this.has(element)){
      let i = this.collection.indexOf(element); 
      this.collection.splice(i,1); 
    }
  }
  // write your size method here
  size(){
    return this.collection.length; 
  }
  // change code above this line
}