// #input: list and integers
// #output: integers -> index of the numbers in the list that adds up to the target

// #important notes:
// # assume that each input would have exactly one solution, and you may not use the same element twice.

// #brute force approach
// #time complexity -> Quadratic o(n^2) due to nested loops

function twosum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
  return -1;
}

//better time complexity
function twosum1(arr, target) {
  let remember = {};

  for (let i = 0; i < arr.length; i++) {
    let complement_value = target - arr[i];

    if (complement_value in remember) {
      return [i, remember[complement_value]];
    } else {
      remember[arr[i]] = i;
    }
  }

  return -1;
}

console.log(twosum1([2, 7, 11, 15], 9));
