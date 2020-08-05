const secondMax = (arr) => {
  if ((!arr && typeof arr !== "object") || arr.length === 0) {
    return "Error!";
  }
  if (arr.length === 1) {
    return arr[0];
  }
  let max = Math.max.apply(null, arr);
  let result = 0;
  for (let i = arr.sort().length; i > 0; i--) {
    if (arr[i - 1] === max) {
      if (i - 1 !== 0) {
        continue;
      } else {
      }
    }
    result = arr[i - 1];
    break;
  }
  return result;
};
console.log(secondMax([2, 3, 4, 5]));
console.log(secondMax([9, 2, 21, 21]));
console.log(secondMax([4, 4, 4, 4]));
console.log(secondMax([4123]));
console.log(secondMax([]));
