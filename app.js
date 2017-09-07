/* The four rules for 'this';
What is the calling object?
* in your own words. explain the four rules for the "this" keyword below.
* 1. calling this in the global scope points to the window object
* 2. when calling a function with . on an object, the object is now this
* 3. if the object was created by a constructor, this refers to that instance of the object
* 4. explicitly define an objects context, kinda like overiding?
* write out a code example of each explanation above
*/

// First Rule
const name1 = "pete";
function greet() {
  const name2 = "sara";
  console.log(name2);
  console.log(this.name1);
}

// Second Rule
const transaction = {
    type: 'Gave ',
    speak: function(currency) {
        console.log(this.type + currency);
        console.log(this);
    }
}

// Third Rule
function FarwellPerson(name) {
    this.farwell = 'Adios ';
    this.name = name;
    this.speak = function() {
        console.log(this.farwell + this.name);
        console.log(this);
    }
};

const farewellJohn = new FarwellPerson('John');
const farewellJane = new FarwellPerson('Jane');

farewellJohn.speak();
farewellJane.speak();

// Fourth Rule * you may want to use your third rule's example to accomplish this
// farewellJohn.speak().call(farewellJane);
// farewellJane.speak().apply(farwellJohn);

// explain closure
/*
functions with persisted data, that is scoped
Rules:

1) must be a nested function

2) the nested function must refer to a value/variable defined in enclosing function

3) enclosing funciton must return the nested function


When to use:

its a tool to avoid global values

and proves form of data hiding

function factories, being DRY

emulates private methods OOPish in javascript
*/

function foo () {
  console.log(this); // what does this point to? // the global object, which is window
};

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  // count needs to be scoped above declaring changeCount
  let count = 0;
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

const Car = function(options) {
  this.make = options.make;
  this.model = options.model;
  this.year = options.year;
  this.speak = function() {
    console.log(this.model, this.year);
  }
}
// when you're done un comment the next few lines and run the file here in node `node app.js`.

const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(herby.speak());
const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(goldfinger.speak());


// once you get done with this, redo it all using the class keyword and a constructor function.

// extra credit

// we didn't touch on Recursion in the lecture yet, but you're going to build a recursive function now


// let n = 10;
// while(n >= 1) {
//   console.log(n);
//   n--;
// }
// write a function called countDown that does the exact same thing as above, but calls itself until it can't anymore.
  // hint-> your base case will look like the logic in the while loop.

const countDown = (num) => {
  if (num > 0) {
    console.log(num);
    countDown(num - 1);
  }
}

countDown(7);



