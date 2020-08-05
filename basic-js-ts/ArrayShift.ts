const shift = (arr, position, count) => {
  if (!arr && arr.length === 0) return [];
  if (position === "left") {
    const shiftArrLeft = [...arr.splice(0, count)];
    return [...arr, ...shiftArrLeft];
  }
  if (position === "right") {
    const shiftArrRight = arr.splice(count - 1, arr.length);
    return [...shiftArrRight, ...arr];
  }
  return [];
};

console.log(shift(["john", "jane", "sarah", "alex"], "left", 2));
console.log(shift([1, 2, 3, 4, 5], "right", 3));
