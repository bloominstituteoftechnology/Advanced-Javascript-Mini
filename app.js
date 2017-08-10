/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. When 'this' doesn't refer to anything in local scope, it will look outside its scope for 'this'
* 2. When using dot notation, 'this' refers to what comes to the left of the dot
* 3. In a constructor function, 'this' refers to the specific object returned by the constructor
* 4. When it comes to call() and apply(), 'this' is defined explicitly in the method

* write out a code example of each explanation above
*/

// First Rule
function myFunction() {
  console.log(this);
};

// Second Rule
const myCat = {
  name: 'Buddy',
  age: 2,
  sayMeow: function() {
    console.log('Meow, my name is `${this.name}`');
  }
};

myCat.sayMeow();

// Third Rule
class Kitty {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.sayMeow = function() {
      console.log('Meow, my name is `${this.name}`');
    };
  };
};

const griffin = new Kitty({name: 'Griffin', age: 1});
const buddy = new Kitty({name: 'Buddy', age: 2});
// Fourth Rule * you may want to use your third rule's example to accomplish this
buddy.sayMeow.call(griffin);

// explain closure 
// A function inside of a function that accesses a variable outside of its scope

function foo () {
  console.log(this); // what does this point to? 
};
// Something in the global scope/window

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  let count = 0; // initialize count
  const changeCount = (value) => {
    count += value; //accesses count here
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
  class Car {
    constructor(options) {
      this.make = options.make;
      this.model = options.model;
      this.year = options.year;
      this.speak = function() {
        console.log( `${this.make} ${this.model} ${this.year}` )
      }
    }
  };

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




