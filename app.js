/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. 'this' refers to an object where it was declared
* 2. 'this' .bind()
* 3. 'this' .call() those are three that related to 'this'
* 4. 'this' .apply()
* write out a code example of each explanation above
*/

// First Rule 
test = 'test';
console.log(global.test); // or console.log(window.test) in a browser
//this.test2 = 'test2' //---> works in browser 
// Second Rule   //well i 

// Third Rule I need to work on it! 

// Fourth Rule * you may want to use your third rule's example to accomplish this

// explain closure 
// returning function from inside of a function. returning function has access to the scope outside of a it,
// but at the same time nothing has access to the scope inside of itself.

function foo () {
  console.log(this); //what does this point to? 
  //window object
};

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it

  let count = 0 // ----> this was the issue I guess 

  const changeCount = (value) => { //----> this function is closure
    count += value;
  };
  return {
    increment: () => {
      changeCount(1);
    },
    decrement: () => {
      changeCount(-1);
    },
    total: () => {
      return count;
    }
  }
};
const counter = counterFunction();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.total());


// create a constructor function called "Car"
  // car takes an options object as its only argument
  // your options object should have "make", "model", "year" properties on it
  // assign these properties you pass in with options to the constructors 'this' object.
  // add a speak() method to your object that when called will log out the car's make model and year.

/*
const Car = function(options) {
  this.make = options.make,
  this.model = options.model,
  this.year = options.year
  this.speak = () => `${this.make}, ${this.model}, ${this.year}`
}
*/

// when you're done un comment the next few lines and run the file here in node `node app.js`.
class Car {
  constructor(options) {
    this.make = options.make,
    this.model = options.model,
    this.year = options.year
    this.speak = () => `${this.make}, ${this.model}, ${this.year}`
  }
}

const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(herby.speak());
const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(goldfinger.speak());


// once you get done with this, redo it all using the class keyword and a constructor function. 

// extra credit

// we didn't touch on Recursion in the lecture yet, but you're going to build a recursive function now


let n = 10;
while(n >= 1) {
  console.log(n);
  n--;
}
// write a function called countDown that does the exact same thing as above, but calls itself until it can't anymore.
  // hint-> your base case will look like the logic in the while loop.

function callItSelf(n){
  console.log(n);
  return n > 1 ? callItSelf(n-1) : n;
}
callItSelf(10);
