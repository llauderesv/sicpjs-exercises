(function() {
  'use strict';

  const add = (a, b) => a + b;

  const make_monitored = f => {
    let counter = 0;
    return (...arg) => {
      if (arg[0] === 'how many calls?') {
        return counter;
      } else if (arg[0] === 'reset count') {
        counter = 0;
      } else {
        counter = counter + 1;
        return f(...arg);
      }
    };
  };

  const fn = make_monitored(add);

  console.log(fn(10, 10));

  console.log(fn(10, 10));

  console.log(fn('how many calls?'));

  console.log(fn('reset count'));

  console.log(fn(10, 10));

  console.log(fn('how many calls?'));
})();
