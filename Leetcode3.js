const lengthOfLongestSubstring = str => {
  let stack = [];
  maximum = 0;
  for (let i = 0; i < str.length; i++) {
    if (stack.includes(str[i])) {
      maximum = Math.max(maximum, stack.length);
      //clear the stack
      while (stack.length) {
        stack.pop();
      }
      //add the new charcater in the stack
      stack.push(str[i]);
    } else {
      stack.push(str[i]);
    }
  }
  return maximum;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
