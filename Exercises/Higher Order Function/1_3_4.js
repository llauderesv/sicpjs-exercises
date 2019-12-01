(function() {
  'use strict';

  // Exercise 1.3.4
  function square(x) {
    return x * x;
  }

  function f(g) {
    return g(2);
  }

  console.log('Returns the square root of 2', f(square));
  console.log('This will return an error', f(f));
  /**
   * Explanation about the error
   *
   * Using Applicative Substitution order
   * Therefore:
   *    f(f) Evaluated
   *     ==> f(2) First return
   *     ==> f(2) This will return an error since 2 is primitive type
   *              not a function
   *
   */
})();
