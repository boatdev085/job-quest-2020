const fizzBuzz = (num) => {
  return num % 3 === 0 && num % 5 === 0
    ? "FizzBuzz"
    : num % 3 === 0
    ? "Fizz"
    : num % 5 === 0
    ? "Buzz"
    : "";
};
console.log(fizzBuzz(21));
console.log(fizzBuzz(18));
console.log(fizzBuzz(70));
console.log(fizzBuzz(45));
