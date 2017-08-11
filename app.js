/* The four rules for 'this';
 * in your own words. explain the four rules for the "this" keyword below.
 * 1. When this is used inside of a globally scoped function, this refers to the window object.
 * 2. When a method is called on an object, the object that precedes the dot is 'this'.
 * 3. In the context of constructor functions, 'this' refers to the object that is instantiated by the constructor function,
 * not the constructor function itself.
 * 4. This is explicitly defined through the use of the 'call' or 'apply' methods.
 * write out a code example of each explanation above
*/

// First Rule
function genericFunction() {
  console.log(this);
}
genericFunction()


// Second Rule
const me = {
  name: 'Randall',
  age: 26,
  intro: 'My name is ',
  sayMyName: function(name){
    console.log(this.intro + name);
  }
};

me.sayMyName('Randall');

// Third Rule
function Cat(options){
  this.name = options.name;
  this.hasTail = options.hasTail;
  this.favoriteFood = options.favoriteFood;
}

const garfield = new Cat({
    name: 'Garfield',
    hasTail: true,
    favoriteFood: 'Lasagna'
});

Cat.prototype.hungryKitty = function(){
  console.log(`${this.name} wants ${this.favoriteFood}`);
};

garfield.hungryKitty();

// Fourth Rule * you may want to use your third rule's example to accomplish this
const whiskers = new Cat({
    name: 'Whiskers',
    hasTail: true,
    favoriteFood: 'Spaghetti'
    });

whiskers.hungryKitty.call(garfield)


// explain closure - An inner function that has access to the variables of enclosing functions.

function foo () {
  console.log(this); // what does this point to?
}; //This points to the window object

const counterFunction = () => {
  let count = 0;// this code is broken. figure out why, and tell us where the closure is when you fix it - RIGHT HERE
  const changeCount = (value) => {
    count += value; //this count value is utilizing closure
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


//First constructor function
function Car(options){
  this.make = options.make;
  this.model = options.model;
  this.year = options.year;
}
Car.prototype.speak = function(){
console.log(`make: ${this.make}, model: ${this.model}, year: ${this.year}`);
}

const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(herby.speak());
const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(goldfinger.speak());

//es6 constructor with class keyword
// once you get done with this, redo it all using the class keyword and a constructor function.
class Car {
  constructor(options) {
    this.make = options.make;
    this.model = options.model;
    this.year = options.year;
  }
  speak() {
    console.log(`make: ${this.make}, model: ${this.model}, year: ${this.year}`);
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

const countDown = (n) => {
  if (n >= 1){
    console.log(n);
    n--;
    countDown(n);
  }
}

countDown(10);
