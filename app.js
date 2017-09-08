/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. whenever this is in the global scope, this will point to the window object
* 2. if a function is called before a dot, that object before the dot is what this points to.
* 3. when this is used inside a constructor function it refers to the specific new object that is made each time.
* 4. when the call or apply methods are used this becomes explicitly defined, it points to the objects passed into those methods.
* write out a code example of each explanation above
*/

// First Rule
const Car = function (traits) {
  this.make = traits.make;
  this.size = traits.size;
};
const camry = new Car({make: 'toyota', size: 'sedan'});
camry.message = function () { return `beep beep, i am a ${this.size}`; }
console.log(camry.message());
camryBeep = camry.message;
console.log(camryBeep());
// Second Rule
Car.prototype.message = function () { return `beep beep, i am a ${this.size}`; }
console.log(camry.message());
// Third Rule
const tundra = new Car ({make: 'toyota', size: 'truck'});
console.log(tundra.message());
// Fourth Rule * you may want to use your third rule's example to accomplish this
console.log(camryBeep.call(tundra));
// explain closure
//closure is when a variable is declared inside the scope of one function but can be accessed by other functions by calling that function that contains it
function foo () {
  console.log(this); // what does this point to? The global window
};

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  let count; // this count variable was not declared. it could not be declared inside changeCount because count must be accessed at total.
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

// const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
// console.log(herby.speak());
// const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
// console.log(goldfinger.speak());


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
