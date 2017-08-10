/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. Globally scoped funtions => 'This' = the Window object
* 2. Chained function calls => 'This' = whatever is returned preceding the dot
* 3. Contructor Functions & Classes => 'This' = the specific instance of the object returned
* 4. Function Call, Apply, or Bind => 'This' = whatever is explicitly defined in the arguments
* write out a code example of each explanation above
*/

// First Rule
let globalThis = this;
console.log(globalThis);
// Second Rule
function thisFunction() {
  this.className = 'thisClass',
  this.classPurpose = 'an example of what this means'
  this.showMeThis = function() {
    console.log(this)
  }
}
const thisFunctionExample = new thisFunction()
thisFunctionExample.showMeThis(); // this = thisFunctionExample
// Third Rule
class thisClass {
  constructor(options) {
    this.classNickname = options.classNickname;
  }
  showMeThis() {
    console.log(this);
  }
}
const thisClassExample = new thisClass({classNickname: 'exemplaryExample'});
thisClassExample.showMeThis();
// Fourth Rule * you may want to use your third rule's example to accomplish this
const options = {
  functionNickname: 'Bound to be another exemplary example'
}
function aFunction() {
  console.log(this.functionNickname);
}
const boundFunction = aFunction.bind(options);
boundFunction()

// explain closure 
// A function that has access to a variable defined in its parent function

function foo () {
  console.log(this); // what does this point to? === Global this (Window)
};

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it  
  let count = 0; // <== Here be the fix
  const changeCount = (value) => { 
    count += value; // <== Here be the closure
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
function Car(options) {
  // your options object should have "make", "model", "year" properties on it
  // assign these properties you pass in with options to the constructors 'this' object.
  this.make = options.make;
  this.model = options.model;
  this.year = options.year;
  // add a speak() method to your object that when called will log out the car's make model and year.
  this.speak = function() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`
  }
}

// when you're done un comment the next few lines and run the file here in node `node app.js`.

const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(herby.speak());
const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(goldfinger.speak());


// once you get done with this, redo it all using the class keyword and a constructor function. 

// class Car {
//   constructor(options) {
//     this.make = options.make;
//     this.model = options.model;
//     this.year = options.year;
//   }
//   sayHi() {
//     return this;
//   }
// }

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
  console.log(n)
  if (n > 1) countDown(n - 1)
}

countDown(5)



