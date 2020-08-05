const fib = (num) => {
  let next = 1;
  let result = 0;
  let current = 0;
  if (num < 2) {
    return num;
  }
  for (let i = 0; i < num; i++) {
    current = next;
    next = next + result;
    result = current;
  }
  return result;
};
console.log(fib(1));
console.log(fib(3));
console.log(fib(12));
console.log(fib(16));
