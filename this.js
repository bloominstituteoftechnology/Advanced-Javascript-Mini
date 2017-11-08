/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, the value of 'this' will be inside the window/console object.
* 2. Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// First Principle
function sayHello(name) {
  console.log(`Hello ${name}`);
  console.log(this);
}

// Second Principle
const myObj = {
  hi: 'Hello ',
  sayHi: function(name) {
    console.log(this.hi + name);
    console.log(this);
  }
};

myObj.sayHi('Ryan');

// Third Principle
function CordialPerson(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson('Newman');
var newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();

// Fourth Principle * you may want to use your third rule's example to accomplish this
