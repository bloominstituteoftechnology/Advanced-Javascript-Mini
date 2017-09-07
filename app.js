/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. Whenever the 'this' keyword is used in a global function it refers to the 'Window' that the function is in. 
* 2. Whenever Dot Notation is used the Object to the left is the reference to 'this'
* 3. Whenever a 'constructor' is used the 'this' keyword refers to the instantiated object 
* 4. You can specifically assign the 'this' keyword using Call() or Apply()
* write out a code example of each explanation above
*/

// First Rule
() => console.log(this);

// Second Rule
const person = {
  greet: 'Hi my name is ',
    writeName: function(test) {
        console.log(this.greet + test);
    }
}
person.writeName('Brandon');

// Third Rule
function Greeting() {
  this.greet = 'Hello ';
  this.sayHi = function(name) {
      console.log(this.greet + name);
  }
};

const newPerson = new Greeting();
newPerson.sayHi('Brandon');


// Fourth Rule * you may want to use your third rule's example to accomplish this
//newPerson.sayHi.apply('Bob');

// explain closure 
// variables Can Only Be Access From The Outside Of The Scope

function foo () {
  console.log(this); // what does this point to? 
};
//Window

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it

  const count = 0; // <-- Added The Count Variable To The Function Scope

  const changeCount = (value) => {
    count += value; // <---- The Bottom Return Does Not Have access To This Varialbe
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
  
  function car (options) {
    this.make = options.make;
    this.model = options.model;
    this.year = options.year;
    this.speak = function () {
      console.log(this.make, this.model);
    };
  }
 

// when you're done un comment the next few lines and run the file here in node `node app.js`.

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




