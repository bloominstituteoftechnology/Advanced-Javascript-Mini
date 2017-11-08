/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* 1. 
* 2. 
* 3. 
* 4. 
* write out a code example of each explanation above
*/

// First Principle

// Second Principle

// Third Principle

// Fourth Principle * you may want to use your third rule's example to accomplish this

// explain closure:

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  const changeCount = value => {
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
  };
};
const counter = counterFunction();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.total());

// constructor functions:

// create a constructor function called "Car"
// car takes an options object as its only argument
// your options object should have "make", "model", "year" properties on it
// assign these properties you pass in with options to the constructors 'this' object.
// add a speak() method to your object that when called will log out the car's make model and year.

// when you're done un comment the next few lines and run the file here in node `node app.js`.

// const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
// console.log(herby.speak());
// const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
// console.log(goldfinger.speak());

// once you get done with this, redo it all using the class keyword and a constructor function.

// Recursion:

let n = 10;
while (n >= 1) {
  console.log(n);
  n--;
}
// write a function called countDown that does the exact same thing as above, but calls itself until it can't anymore.
// hint-> your base case will look like the logic in the while loop.
