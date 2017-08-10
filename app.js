/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. When a function if in the Global scope this equals the window object
* 2. when a function is called by a preceeding dot the object before the dot is this
* 3. in a constructor function this refers to the specific object returned to the object
* 4. with call or apply this is defined in the method
* write out a code example of each explanation above
*/

function thisFunction() {
  this;
};
// this === window
// First Rule
const second = {
  name: 'Dylan',
  anything: function() {
    return `${this}`;
  }
}
// this === second
// Second Rule
class Person {
  constructor(options) {
    this.name = options.name
    this.greet = () => {
      console.log(`${this.name}`);
    };
  }
}
const dylan = new Person({name: 'Dylan'});
const other = new Person({name: 'anon'});
//this=== person whos options are passed into the constructor for the specific instance
// Third Rule
dylan.greet.call(other);
//this===other
// Fourth Rule * you may want to use your third rule's example to accomplish this

// explain closure 
// closure deals with accessing variables. You can only access variables in own scope or an outer scope.
function foo () {
  console.log(this); // what does this point to?  the window
};

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  let count = 0;  //count must be intialized
  const changeCount = (value) => {
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

class Car {
  constructor(options) {
    this.make = options.make;
    this.model = options.model;
    this.year = options.year;
  }
  speak() {
    console.log(`${this.make} ${this.model} ${this.year}`)
  }
}
// create a constructor function called "Car"
  // car takes an options object as its only argument
  // your options object should have "make", "model", "year" properties on it
  // assign these properties you pass in with options to the constructors 'this' object.
  // add a speak() method to your object that when called will log out the car's make model and year.

// when you're done un comment the next few lines and run the file here in node `node app.js`.

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
n = 10;
const countDown = () => {
  console.log(n);
  n--;
  if(n >=1) {countDown();}
};
countDown();

