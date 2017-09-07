/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. In the global scope, `this` referes to the `window` object.
* 2. Whenever a function is called, the object preceeding the dot is the `this` scope
* 3. When an object is being created, `this` refers to the instance of the object that will be returned
* 4. When you use call/apply/bind, you specify the `this` scope for the function to execute in
* write out a code example of each explanation above
*/

// First Rule
let bob = function() { console.log(this); return 'Bob' };
  // Window {stop: function, open: function, alert: function, confirm: function, prompt: function…}
  // "Bob"

// Second Rule
class Fruit {
  constructor(type, color) {
    this.getType = function() { return type };
    this.getColor = () => color;
  }
  message() {
    console.log(this);
    return `I am a ${this.getColor()} ${this.getType()}`; 
  }
}

const apple = new Fruit("Apple", "Red");
apple.message();
  // Fruit {getType: function, getColor: function}
  // "I am a Red Apple"

// Third Rule
// `this` in the Fruit class above is referencing `apple` during `apple`'s creation

// Fourth Rule * you may want to use your third rule's example to accomplish this
const orange = new Fruit("Orange", "Orange");
let fruitMessage = apple.message;
console.log(fruitMessage.call(orange));
  // I am a Orange Orange
console.log(fruitMessage.apply(orange));
  // I am a Orange Orange
fruitMessage = apple.message.bind(orange);
console.log(fruitMessage());
  // I am a Orange Orange


// explain closure
 // closure is a way for a function to hold onto an object created outside of it's
 // scope even when that object normally would've been deleted as nothing
 // would've been able to access it if it wasn't for that function


function foo () {
  console.log(this); // what does this point to?
  // `this` points to `window` because a new object isn't being created and
  // foo is in the global scope.
};

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  let count = 0; 
  const changeCount = (value) => {
    count += value; //closure is here. it is holding onto count
  };
  return {
    increment: () => {
      changeCount(1); //closure is here. It is holding onto changeCount
    },
    decrement: () => { 
      changeCount(-1); //closure is here. It is holding onto changeCount
    },
    total: () => {
      return count; //closure is here. It is holding onto count
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

function Car(options) {
  this.make = options.make;
  this.model = options.model;
  this.year = options.year;
  this.speak = function() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(herby.speak());
const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(goldfinger.speak());


// once you get done with this, redo it all using the class keyword and a constructor function. 
class Car {
  constructor(options) {
    this.make = options.make;
    this.model = options.model;
    this.year = options.year;
  }
  speak() {
    return `${this.year} ${this.make} ${this.model}`; 
  }
}

const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(herby.speak());
const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(goldfinger.speak());

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
  if(n > 0){
    console.log(n);
    countDown(--n);
  }
};

countDown(10);




