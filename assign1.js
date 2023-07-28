function fibsIterative(n) {
  if (n <= 0) {
    return "Please enter a number greater than zero";
  } else if (n === 1) {
    return [0];
  }

  let array = [0, 1];

  for (let i = 0; i < n - 2; i += 1) {
    let nextNum = array[i] + array[i + 1];
    array.push(nextNum);
  }

  return array;
}

function fibsRecursive(n) {
  if (n <= 0) {
    return "Please enter a number greater than zero";
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    return [
      ...fibsRecursive(n - 1),
      fibsRecursive(n - 1)[n - 2] + fibsRecursive(n - 1)[n - 3],
    ];
  }
}

console.log("Iterative");
console.log(fibsIterative(-2));
console.log(fibsIterative(1));
console.log(fibsIterative(8));

console.log("Recursive");
console.log(fibsRecursive(8));
