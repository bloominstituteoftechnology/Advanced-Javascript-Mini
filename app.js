/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. Whenever a function has a global scope, this refers to the window object
* 2. Whenever a function is called by a preceding dot, the object before the dot is this.
* 3. When a constructor function is used, this refers to the specific instance of
                the object created/returned by the constructor function
* 4. With call and apply, this is explicitly defined
* write out a code example of each explanation above
*/

// First Rule
// When in the global scope:
//      console.log(this); -> points to window object
// Second Rule
      // const car = {
      //   name: 'Corvette',
      //   speed: 'extreme',
      //   drive: function() {
      //   console.log(`The car drove at ${this.speed} speeds.`);
      //   console.log(this); -> refers to the car object
      //   }
      //}
// Third Rule
//          function food(name, foodGroup) {
//            this.name = name;
//            this.foodGroup = foodGroup;
//            this.eat = function() {
//            console.log(`You took a bite of your ${this.name}.`);
//            console.log(this); -> this refers to the steak instance of the food class when steak.eat() is called
//            }
//}
//            const steak = new food('steak', 'meat');
//            steak.eat(); -> prints out "You took a bite....." and then steak on the next line
//
// Fourth Rule * you may want to use your third rule's example to accomplish this
//                            Copied and pasted from rule #3:
//          function food(name, foodGroup) {
//            this.name = name;
//            this.foodGroup = foodGroup;
//            this.eat = function() {
//            console.log(`You took a bite of your ${this.name}.`);
//            console.log(this);
//            }
//          }
//            const steak = new food('steak', 'meat');
//            steak.eat();
//            const celery = new food('celery', 'veggies');
//            steak.eat.call(celery); -> same as calling celery.eat()
//
// explain closure
// a closure is an inner function that accesses one or more variabels outside of the scope of the defined function

function foo () {
  console.log(this); // what does this point to? This points to the global object
};

const counterFunction = () => {
  let count = 0;
  // this code is broken. figure out why, and tell us where the closure is when you fix it -> this line, count needed a starting value
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
}

Car.prototype.speak = function() {
  console.log(`You are driving a ${this.year} ${this.make} ${this.model}.`);
}

// when you're done un comment the next few lines and run the file here in node `node app.js`.

const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(herby.speak());
const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(goldfinger.speak());


// once you get done with this, redo it all using the class keyword and a constructor function.

class Car2 {
  constructor(options) {
    this.make = options.make;
    this.model = options.model;
    this.year = options.year;
  }
  speak() {
    console.log(`You are driving a ${this.year} ${this.make} ${this.model}.`);
  }
}

// extra credit

// we didn't touch on Recursion in the lecture yet, but you're going to build a recursive function now

const countDown = (n) => {
  if (n >= 1) {
    console.log(n);
    n--;
    countDown(n);
  }
}
// write a function called countDown that does the exact same thing as above, but calls itself until it can't anymore.
  // hint-> your base case will look like the logic in the while loop.
