(function() {
  'use strict';

  /**
   * Higher Order function
   * A function that takes another function as an
   * argument and return a brand new function
   *
   */

  // function sum_integers(a, b) {
  //   return a > b ? 0 : a + sum_integers(a + 1, b);
  // }

  // This newly Higher Order Function will executes linear recursive
  // function sum(term, a, next, b) {
  //   return a > b ? 0 : term(a) + sum(term, next(a), next, b);
  // }

  // Convert our function above to linear iterative
  function sum(term, a, next, b) {
    function iter(a, result) {
      return a > b ? result : iter(next(a), result + term(a));
    }

    return iter(a, 0);
  }

  function inc(a) {
    return a + 1;
  }

  function identity(a) {
    return a;
  }

  function sum_integers(a, b) {
    return sum(identity, a, inc, b);
  }

  function cubes(a) {
    return a * a * a;
  }

  // Sum of cubes
  function sum_cubes(a, b) {
    return sum(cubes, a, inc, b);
  }

  // Product of number ranges
  console.log(sum_integers(1, 3));
})();
