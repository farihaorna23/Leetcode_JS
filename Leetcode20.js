// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(str) {
  if (str.length % 2 != 0) {
    return false;
  }

  let brackets = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  let stack = [];

  for (let char of str) {
    if (char in brackets) {
      if (stack.length > 0 && stack[stack.length - 1] == brackets[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isValid("([{])"));
