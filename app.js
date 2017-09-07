/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. When a function is global, `this` refers to the window
* 2. `this` can refer to the object that `this` is inside of
* 3. `this` also refers to specific options that the constructed object has
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
};
const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  let count = 0; //THE CLOSURE IS HERE
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
/*
  const Car = function (options) {
  this.make = options.make;
  this.model = options.model;
  this.year = options.year;
  this.speak = function () {
    return `${options.make} ${options.model} ${options.year}`
  }
}
 //when you're done un comment the next few lines and run the file here in node `node app.js`.


const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(herby.speak());
const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(goldfinger.speak());
*/

// once you get done with this, redo it all using the class keyword and a constructor function. 

class Car {
  constructor(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  }
  get speak () {
    return `${this.make} ${this.model} ${this.year}`
    }
  
}

const coleCar = new Car('Jeep', 'Grand Cherokee', '2010');
console.log(coleCar.speak);
// extra credit

// we didn't touch on Recursion in the lecture yet, but you're going to build a recursive function now


let n = 10;
while(n >= 1) {
  console.log(n);
  n--;
}
// write a function called countDown that does the exact same thing as above, but calls itself until it can't anymore.
  // hint-> your base case will look like the logic in the while loop.

  const countdown = (start) => {
    if (start > 0) {
        console.log(start);
        return countdown(start - 1);
    } else {
        return start;
    }
};
countdown(10);

