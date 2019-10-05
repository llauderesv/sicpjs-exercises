(function() {
  'use strict';

  // Exercise 1.31
  // Create an equivalent Implementation of sum HOC using product instead
  // Returns the product between the number in ranges

  // Using Linear recursive
  // function product(a, b) {
  //   return a > b ? 1 : a * product(a + 1, b);
  // }

  // Using Linear iteration
  // function product(a, b) {
  //   function iter(a, result) {
  //     return a > b ? result : iter(a + 1, result * a);
  //   }
  //   return iter(a, 1);
  // }

  // with Higher Order Function
  function product(term, a, next, b) {
    console.log('Formula:');

    function iter(a, result) {
      return a > b ? result : iter(next(a), result * term(a));
    }

    return iter(a, 1);
  }

  // We used this function in adding the ranges of integers since we don't need
  // To perform any operation unlike in cube
  function identity(x) {
    return x;
  }

  function inc(x) {
    return x + 1;
  }

  function cubes(x) {
    return x * x * x;
  }

  // Get the product of Ranges
  function product_integers(a, b) {
    return product(identity, a, inc, b);
  }
  console.log('Product of Ranges Integers:', product_integers(1, 3));

  // Get the product cubes in Ranges
  function product_cubes(a, b) {
    return product(cubes, a, inc, b);
  }

  console.log('Product of Ranges Cubes:', product_cubes(1, 3));
})();
