function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.push = function (element) {
    collection.push(element)
  }
  // Only change code above this line

  this.pop = function () {
    return collection.pop(); 
  }

  this.isEmpty = function () {
    return collection.length === 0; 
  }

  this.clear = function() {
    collection = []; 
  }

  this.peek = function () {
    return collection[collection.length - 1]; 
  }
}


