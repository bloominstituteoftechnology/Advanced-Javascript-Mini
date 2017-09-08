/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. For functions in the global scope, "this" refers to the global object, e.g. the Window object in a browser.
* 2. If a function is called with a dot before it, the object to the left of the dot is "this".
* 3. Inside a constructor, "this" refers to an instance of an object created by the constructor.
* 4. If call, apply, or bind are used "this" refers to whatever it was defined to be.
* write out a code example of each explanation above
*/

// First Rule
function firstRuleOfThis() {
  console.log(this); // Logs out the global object
}

// Second Rule
const cat = {
  name: 'Larry',
  meow: function() {
    console.log(`${this.name} says, Meow!`);
  }
};

cat.meow(); // Logs out 'Larry says, Meow!'

// Third Rule
const Fish = function(options) {
  this.name = options.name;
  this.color = options.color;
  this.type = options.type
  this.doFishThings = function() {
    return `The ${this.color} ${this.type} says "my name is ${this.name}. Bloop! Bloop!"`;
  }
}

const jeff = new Fish({
  name: 'Jeff',
  color: 'orange',
  type: 'goldfish'
});

console.log(jeff.doFishThings()); // Logs 'The orange goldfish says "my name is Jeff. Bloop! Bloop!"'

// Fourth Rule * you may want to use your third rule's example to accomplish this
const carl = new Fish({
  name: 'Carl',
  color: 'brown',
  type: 'catfish'
});

console.log(jeff.doFishThings.call(carl)); // Logs 'The brown catfish says "my name is Carl. Bloop! Bloop!"'

// explain closure 
// A closure is a function that remembers the context in which it was created.
// So, it retains access to variables in its containing scope even after the orginal
// function has stopped execution

function foo () {
  console.log(this); // what does this point to?
  // this is pointing to the global object
};

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  let count = 0;
  const changeCount = (value) => {
    count += value; // Here is the closure
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
    return `${this.year} ${this.make} ${this.model}`;
  }
};

// when you're done un comment the next few lines and run the file here in node `node app.js`.

const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(herby.speak());
const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(goldfinger.speak());


// once you get done with this, redo it all using the class keyword and a constructor function. 
class ClassyCar{
  constructor(options) {
    this.make = options.make;
    this.model = options.model;
    this.year = options.year;
  }

  speak() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

const classyHerby = new ClassyCar({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(classyHerby.speak());
const classyGoldfinger = new ClassyCar({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(classyGoldfinger.speak());
// extra credit

// we didn't touch on Recursion in the lecture yet, but you're going to build a recursive function now


let n = 10;
while(n >= 1) {
  console.log(n);
  n--;
}
// write a function called countDown that does the exact same thing as above, but calls itself until it can't anymore.
  // hint-> your base case will look like the logic in the while loop.

const countDown = (num) => {
  if (num > 0) {
    console.log(num);
    return countDown(num - 1);
  }
};


