const { performance } = require('perf_hooks');

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

function secondAddUpTo(n) {
  return (n * (n + 1)) / 2;
}

function timeFn(fn, param) {
  let t1 = performance.now();
  fn(param);
  let t2 = performance.now();
  console.log(`Time: ${(t2 - t1) / 1000} seconds`);
}
0;
timeFn(addUpTo, 10000000000);
timeFn(secondAddUpTo, 10000000000);
