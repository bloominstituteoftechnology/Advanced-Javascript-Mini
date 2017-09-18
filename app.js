/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* Any "this" value is not set when it is typed/input: it is only set when it is run. So...
* 1.For functions that are global, "this" within the functions belongs/is tied to the window
* 2.If there's a dot before a function, the nearest object prior to the dot owns "this".
* 3.When you use a constructor to make objects, "this" clings to the object that was just
// returned by that function.
* 4.Using call or apply affixes "this" to the first argument passed in to "call" or "apply".
* write out a code example of each explanation above
*/
// First Rule
// Basic Function
// function greetMe(name) {
    // console.log('Hello ' + name);
    // console.log(this);
// }
// greetMe('John');
// Here, **greetMe('john');** is no different than calling **window.greetMe('john');**
// so (this) points to the window.
// Second Rule
// Object Method
// -------------
// var greetMe = {
    // greeting: 'Hello ',
    // speak: function(name) {
        // console.log(this.greeting + name);
        // console.log(this);
    // }
// }
// greetMe.speak('John');
// greetMe is to the left of the dot before **speak('John');** so (this) within "speak:" points to greetMe
// Third Rule
// Constructor Function
// --------------------
// function GreetMe(name) {
    // this.greeting = 'Hello ';
    // this.name = name;
    // this.speak = function() {
      // console.log(this.greeting + this.name);
    // console.log(this);
  // }
// };
// var greetJohn = new GreetMe('John');
// var greetJane = new GreetMe('Jane');
// greetJohn.speak();
// greetJane.speak();
// greetJohn and greetJane variables are assigned a unique object returned by the
// GreetMe constructor function.
// So this inside of the speak method points to the unique GreetMe object
// instance stored within the variable on which the speak method is being called.
// Fourth Rule * you may want to use your third rule's example to accomplish this
// Using call/apply
// ----------------
// greetJohn.sayGoodbye.call(greetJane);
// greetJane.sayGoodbye.apply(greetJohn);
// The first argument passed to the **call** or **apply**
 // methods explicitly sets what **this** points to.

// explain closure
// Closures happen as a result of writing code that relies on lexical scope. They just happen.
// Closure is a function's ability to remember and access its lexical scope
// even when that function is executing outside its lexical scope.
// function foo () {
  // console.log(this); // what does this point to?
  // This points to the window. - JP
  // };

function counterFunction () {
  let count = 0;
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  // **I assume this is supposed to be a counter function.
  // You just make a function, put count immediately inside of it to make it local. The counting
  // function is now within the **changeCount function** which holds count so the closure is there.
  // All of this is boxed up within the counterFunction function. - JP**
  const changeCount = function () {
    count = count + 1;
    console.log(count)
  }
  return changeCount;
}
var increment = counterFunction();
console.log (increment());
console.log (increment());
console.log (increment());
console.log (increment());
console.log (increment());
// sorry but I hate es6 function syntax (for now)


// create a constructor function called "Car"
  // car takes an options object as its only argument
  // your options object should have "make", "model", "year" properties on it
  // assign these properties you pass in with options to the constructors 'this' object.
  // add a speak() method to your object that when called will log out the car's make model and year.
  const Car = function (options) {
    this.make = options.make;
    this.model = options.model;
    this.year = options.year;
    this.speak = function () {
      console.log(this.make);
      console.log(this.model);
      console.log(this.year);
    };
  };
// when you're done un comment the next few lines and run the file here in node `node app.js`.

const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(herby.speak());

const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(goldfinger.speak());


// once you get done with this, redo it all using the class keyword and a constructor function.
class MyCar {
constructor(options) {
  this.make = options.make;
  this.model = options.model;
  this.year = options.year;
  this.speak = function () {
    console.log(this.make);
    console.log(this.model);
    console.log(this.year);
  };
};
}
const bond = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(bond.speak());

const blofeld = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(blofeld.speak());
// extra credit **no thanks **

// we didn't touch on Recursion in the lecture yet, but you're going to build a recursive function now
// let n = 10;
// while(n >= 1) {
  // console.log(n);
  // n--;
// }
// write a function called countDown that does the exact same thing as above, but calls itself until it can't anymore.
  // hint-> your base case will look like the logic in the while loop.
