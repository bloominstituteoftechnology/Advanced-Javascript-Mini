/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. this points to the global object (window in the browser)
* 2. if a function call is preceded by a dot, this points to the object to the left of the dot 
* 3. this is bound to the object returned by a constructor function
* 4. this is explicitly set by using bind, call. or apply
* write out a code example of each explanation above
*/

// First Rule
console.log("\nRule One");
function testThis(){
  console.log(this);
}
testThis(); //this is bound to global object

// Second Rule
console.log("\nRule Two");
const person = {
  name: "Nick",
  speak: function(){
    console.log(`Hi my name is ${this.name}`);
    console.log(this);
  }
}
person.speak(); //this is bound to the person object

// Third Rule
console.log("\nRule Three");
const Greet = function(name) {
  this.name = name,
  this.greet = function() {
    console.log(`Hello ${this.name}`);
    console.log(this);
  }
}
const greetNick = new Greet("Nick"); //this is bound to the greetNick object
const greetJohn = new Greet("John"); //this is bound to the greetJohn object
greetNick.greet();
greetJohn.greet();

// Fourth Rule * you may want to use your third rule's example to accomplish this
console.log("\nRule Four");
greetJohn.greet.call(greetNick); //this is explicity bound to the greetNick object

// explain closure 
// Closures allows you access variables declared from an outer scope from an inner scope

function foo () {
  console.log(this); // what does this point to?
  //this points to the global object
};

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  let count = 0;
  const changeCount = (value) => {
    count += value; //closure occurs here because the changeCount function is accessing the count variable from the outer scope
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

/* commenting out to not conflict with Car class below

function Car (options) {
  this.make = options.make;
  this.model = options.model;
  this.year = options.year;
  this.speak = function(){
    return `make: ${this.make}, model: ${this.model}, year: ${this.year}`;
  }
}
*/

// when you're done un comment the next few lines and run the file here in node `node app.js`.

/* commenting out to not conflict with Car class below
const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(herby.speak());
const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(goldfinger.speak());
*/

// once you get done with this, redo it all using the class keyword and a constructor function. 
class Car {
  constructor(options){
    this.make = options.make;
    this.model = options.model;
    this.year = options.year;
  }
  speak() {
    return `make: ${this.make}, model: ${this.model}, year: ${this.year}`;    
  }
}

const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(herby.speak());
const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(goldfinger.speak());

// extra credit

// we didn't touch on Recursion in the lecture yet, but you're going to build a recursive function now
/*
let n = 10;
while(n >= 1) {
  console.log(n);
  n--;
}
*/

// write a function called countDown that does the exact same thing as above, but calls itself until it can't anymore.
  // hint-> your base case will look like the logic in the while loop.
const countDown = function(n) {
  if (n === 1){
    console.log(n);
    return 1;
  }
  console.log(n);
  n--;
  return countDown(n);
}
countDown(10);



