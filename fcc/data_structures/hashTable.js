var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};

  this.print = function() {
    return this.collection; 
  }

  this.add = function (key, value) { 
    let hashKey = hash(key); 
    if(!this.collection.hasOwnProperty(hashKey)){ 
      this.collection[hashKey] = {};   
    } 

    this.collection[hashKey][key] = value; 
  }
  
  this.lookup = function (key) {
    let hashKey = hash(key); 
    if(this.collection.hasOwnProperty(hashKey)){
      return this.collection[hashKey][key]; 
    }
    return null; 
  }

  this.remove = function (key) { 
    let hashKey = hash(key); 
    if(this.collection.hasOwnProperty(hashKey)){
      delete this.collection[hashKey]; 
    }
  }

};