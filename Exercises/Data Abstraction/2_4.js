(function() {
  'use strict';

  /**
   * Data Abstraction
   *
   * We're going to abstract the pair implementation using function
   * w/out using any data structures
   *
   */

  /**
   * This function accepts two arguments x and y and serves as pair.
   * And returns a function that function accepts a function as argument
   * to pass the value of x and y.
   *
   * @param {number} x
   * @param {number} y
   *
   */
  const pair = (x, y) => dispatch => dispatch(x, y);

  const head = z => z((x, y) => x);

  console.log('Head', head(pair(1, 2))); // Returns 1

  /**
   * Explanation:
   * Our head function above accepts a function argument and execute the accepted function argument.
   * in that function argument we passed another function and return the first argument which is x.
   *
   * If we run this function using substitution model we need to resolve first the pair(1,2).
   * Our pair function accepts two arguments x and y and return a function dispatch and passed the two arguments receives in pair
   * (dispatch) => dispatch(1,2)
   *
   * Next is head function
   * head((dispatch) => dispatch(1,2))
   *   --> head(dispatch(1,2)) // returns 1
   */

  /**
   * Exercise 2.4
   *
   * Implement tail function using the pair function above
   *
   */

  const tail = z => z((x, y) => y);

  console.log('Tail', tail(pair(1, 2))); // Returns 2

  const print_pair = (x, y) =>
    console.log('Pair function', `${head(pair(x, y))}/${tail(pair(x, y))}`);

  console.log(print_pair(1, 2));

  // const promise = (resolve, reject) => {
  //   try {
  //     setTimeout(() => resolve, 1500);
  //   } catch (error) {
  //     reject(error);
  //   }
  // };

  // promise(() => {}, () => {});
})();
