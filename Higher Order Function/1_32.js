(function() {
  // Exercise 1.32
  // Implementing accumulate function to handle both sum and product function

  // Using Linear Iteration
  function accumulate_i(combiner, initial_value, term, a, next, b) {
    function iter(a, result) {
      return a > b ? result : iter(next(a), combiner(result, term(a)));
    }

    return iter(a, initial_value);
  }

  // Using Linear Recursive
  function accumulate_r(combiner, initial_value, term, a, next, b) {
    return a > b
      ? initial_value
      : combiner(
          term(a),
          accumulate_r(combiner, initial_value, term, next(a), next, b)
        );
  }

  function inc(a) {
    return a + 1;
  }

  function identity(a) {
    return a;
  }

  // Used to decide on what action to perform in accumulate function
  function combiner(a, b) {
    return a + b;
  }

  // Sum of Integers using accumulate_i
  function sum_integers_i(a, b) {
    return accumulate_i(combiner, 0, identity, a, inc, b);
  }
  console.log('Using Linear Iteration:', sum_integers_i(1, 3));

  function sum_integers_r(a, b) {
    return accumulate_r(combiner, 0, identity, a, inc, b);
  }
  console.log('Using Linear Recursive:', sum_integers_r(1, 3));
})();
