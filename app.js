/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. When a function is in the global scope, this inside the function will be the window object.
* 2. When a function is called with a dot, this is whatever is preceding the dot
* 3. When used with a constructor, this refers to the specific variable
* 4. Call and Apply use the first argument passed to them to determine what this points to
* write out a code example of each explanation above
*/    

// First Rule
function sayHello(name) {
  console.log('Hi' + name);
  console.log(this);
}
sayHello('Sara')

// Second Rule
const Dog = {
  name; 'Cooper';
  func: function () {
    return this.name;
  }
};
console.log(Dog.func());

// Third Rule
function User(users) {
  this.name = name
}
const richard = new User;
console.log(richard.name);

// Fourth Rule * you may want to use your third rule's example to accomplish this

// explain closure Functions that have access to outer functions variables and scope

function foo () {
  console.log(this); // what does this point to?
};
This points to the global window

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  let count = 0; // there was no place to start the count
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
function Car(options) {
  this.make = options.make;
  this.model = options.model;
  this.year = options.year;
  this.speak = () => {
    return `${this.make} ${this.model} ${this.year}`
  };
}
// when you're done un comment the next few lines and run the file here in node `node app.js`.

 const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
 console.log(herby.speak());
 const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
 console.log(goldfinger.speak());


// once you get done with this, redo it all using the class keyword and a constructor function. 
class Cars {
  function (options) {
    this.model = options.model;
    this.make = options.make;
    this.year = options.year;
  }
  speak(){
    return `${this.make} ${this.model} ${this.year}`;
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




