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

// explain closure

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
