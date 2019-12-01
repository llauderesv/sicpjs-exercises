(function() {
  'use strict';

  // Exercise 3.1
  // Creating make_accumulator function that sets the initial value of sum
  // then get accumulates by adding a value each time the function was called.

  const make_accumulator = initial_value => sum => {
    initial_value = initial_value + sum;
    return initial_value;
  };

  const fn = make_accumulator(value);

  console.log(fn(10)); // 15

  console.log(fn(10)); // 25
})();
