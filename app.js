/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. Anytime you have a function that happens to be contained in the global scope, the value of "this" when used inside of that function will be set to the window object.
* 2. If a function is called by a preceding dot, any object that comes before that dot will be "this"
* 3. When a constructor function is used, "this" in this case, refers to the specific instance of that object that is not only created by also returned by that constructor function.
* 4. In any circumstance when JavaScript's call or apply method are implemented, "this" is then explicitly defined.
*/

// First Rule
const welcomeGreeting = (name) => {
  console.log(`Welcome to the party, ${name}`);
  console.log(this);
};

welcomeGreeting('Person');

// Second Rule
const anotherGreeting = {
  newGreet: 'Hi, Nice to meet you, ',
  greetPerson: function(name) {
    console.log(`${this.newGreet} ${name}`);
  }
};

anotherGreeting.greetPerson('Person');

// Third Rule
function newCharacter (options) {
  this.typeClass = options.typeClass;
  this.weaponSelection = options.weaponSelection;
  this.playerMessage = function() {
    console.log(`Your player class is ${this.typeClass}` + ` and your weapon of choice is  ${this.weaponSelection}` );
  }
};

const playerOne = new newCharacter({typeClass: 'Mage', weaponSelection: 'Staff'});
console.log(playerOne);

// Fourth Rule * you may want to use your third rule's example to accomplish this

anotherGreeting.greetPerson.call(anotherGreeting, 'Person');

// explain closure

// Closure is a function that is returned by another function and maintains bindings between the variable assignments local to the outer function the closure
// was create in.

function foo () {
  console.log(this); // what does this point to?
};

// this will point to the global object

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  let count = 0;
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
// const Car = function(options){
//   this.make = options.make;
//   this.model = options.model;
//   this.year = options.year;
//   this.speak = () => console.log(`${this.model} ${this.year}`);
// }
class Car{
  constructor(options) {
    this.make = options.make;
    this.model = options.model;
    this.year = options.year;
    this.speak = () => console.log(`${this.model} ${this.year}`);
  };
};



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
  if(n === 0) return;
  console.log(n);
  return countDown(n-1);
};

countDown(10);