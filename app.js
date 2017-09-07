/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. 
* 2. 
* 3. 
* 4. 
* write out a code example of each explanation above
*/

// First Rule

// Second Rule

// Third Rule

// Fourth Rule * you may want to use your third rule's example to accomplish this

// explain closure 

function foo () {
  console.log(this); // what does this point to?
};                   // Answer: this points to the global object

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  let count = 0; // You never declared a count variable in closure, the closure is inside of counterFunction
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


// create a constructor function called "Car"
  // car takes an options object as its only argument
  // your options object should have "make", "model", "year" properties on it
  // assign these properties you pass in with options to the constructors 'this' object.
  // add a speak() method to your object that when called will log out the car's make model and year.
  function Car(opts) {
    this.make = opts.make;
    this.model = opts.model;
    this.year = opts.year;

    this.speak = () => {
      return `${this.make} ${this.model} ${this.year}`;
    };
  }

// when you're done un comment the next few lines and run the file here in node `node app.js`.

const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(herby.speak());
const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(goldfinger.speak());


// once you get done with this, redo it all using the class keyword and a constructor function. 
class ClassCar { // can't use name Car, already defined.
  constructor(opts) {
    this.model = opts.model;
    this.make = opts.make;
    this.year = opts.year;
  }

  speak() {
    return `${this.model} ${this.make} ${this.year}`;
  }
}

// extra credit

// we didn't touch on Recursion in the lecture yet, but you're going to build a recursive function now


let n = 10;
while(n >= 1) {
  console.log(n);
  n--;
}
// write a function called countDown that does the exact same thing as above, but calls itself until it can't anymore.
  // hint-> your base case will look like the logic in the while loop.

function countDown(n) {
  if (n === 1) {
    console.log(n);
  } else {
    console.log(n);
    countDown(n-1);
  }
}

countDown(5);


