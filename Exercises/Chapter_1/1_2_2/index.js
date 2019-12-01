(function() {
  'use strict';

  // Tree Recursion
  // Fibonacci Using Tree recursion
  // function fib(n) {
  //   return n === 1 ? 1 : n === 0 ? 0 : fib(n - 1) + fib(n - 2);
  // }

  // F(5) -> 1, 1, 2, 3
  // F(5) -> 3, 2, 1, 1
  // F(6) -> 5, 3, 2, 1, 1
  // F(7) -> 8, 5, 3, 2, 1, 1
  // F(8) -> 13, 8, 5, 3, 2, 1, 1

  // Fibonacci using iterative process
  function fib(n) {
    return fib_iter(1, 0, n);
  }

  function fib_iter(current_value, iterator, n) {
    return n === 0
      ? iterator
      : fib_iter(current_value + iterator, current_value, n - 1);
  }

  /*

    Example steps by steps how function above works...

    fib(5)

    fib_iter(1, 0, 5)
    5 === 0 ? 0 : fib_iter(1, 1, 5 - 1);

    fib_iter(1, 1, 4)
    4 === 0 ? 1 : fib_iter(2, 1, 4 - 1);

    fib_iter(2, 1, 3)
    3 === 0 : 2 ? fib_iter(3, 2, 3 - 1)

    fib_iter(3, 2, 2)
    2 === 0 : 2 ? fib_iter(5, 3, 2 - 1)

    fib_iter(5, 3, 1)
    1 === 0 : 3 ? fib_iter(8, 5, 1 - 1)

    fib_iter(8, 5, 0)
    0 === 0 : 5  //? fib_iter(8, 5, 1 - 1)

  */

  // console.log(fib(7));
  // Factorial implementation using iterative process

  // n! =  n > 0 ? * (n - 1) .... : 0
  // 5! = 5 - 1

  // 1x2x3x4x5 = 120
  function factorial(n) {
    return factorial_iter(1, 1, n);
  }

  function factorial_iter(product, a, count) {
    return a === count
      ? product
      : factorial_iter(product * (a + 1), a + 1, count);
  }

  // console.log(factorial(10));

  // I can now implement an iterative function using loops in js with callbacks
  function loop(n, cb) {
    cb(n);
    return n > 0 ? loop(n - 1, cb) : n;
  }

  loop(5, function(a) {
    console.log(a);
  });
})();
