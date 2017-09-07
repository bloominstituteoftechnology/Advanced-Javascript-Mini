/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. If 'this' is called outside of a defined object, it points to the window object.
* 2. When a function is called by a dot on the left, the object to the left is 'this'.
* 3. When a constructor function is used, 'this' referes to the specific instance of the object.
* 4. When 'call' or 'apply' are used, 'this' is defined explicitely.
* write out a code example of each explanation above
*/

// First Rule

const stuffNThings = (str) => {
  console.log(`${str} N' Things`);
}

// Second Rule

class Envelope  {
  constructor (str) { 
    this.item = str;
  }
}



// Third Rule

const red = new Envelope('Monkey');
console.log(red.item);

// Fourth Rule * you may want to use your third rule's example to accomplish this



// explain closure 

function foo () {
  console.log(this); // what does this point to? The window.
};

const counterFunction = () => {
  let count = 0;
  // this code is broken. figure out why, and tell us where the closure is when you fix it. Closure is line above, the variable outside of the function call.
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

// when you're done un comment the next few lines and run the file here in node `node app.js`.

class Car {
  constructor(obj) {
    this.make = obj.make;
    this.model = obj.model;
    this.year = obj.year;
  }

  speak() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }
}

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

const countDown = (n) => {
  let x = n;
  console.log(x);
  if (x > 1) {
    x--;
    countDown(x);
  }
}

countDown(5);
