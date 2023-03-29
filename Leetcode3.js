const lengthOfLongestSubstring = str => {
  //abc -> bca -> cab -> cb -> b
  //the look up for set has,add and remove method is O(1) on average
  //This means that the time taken to add an element to the set is constant and does not depend on the size of the set. However, in the worst-case scenario, when the hash function used to generate the hash code for the element results in a hash collision, the time complexity could be O(n), where n is the number of elements in the set.
  // However, since hash collisions are relatively rare and the JavaScript engine uses a good hash function to minimize the occurrence of collisions, the add() method of sets is typically considered to have a time complexity of O(1) on average.

  let hashSet = new Set();
  let maxLength = 0;
  let i = 0;
  let leftPointer = 0; //for the poinnter in the set
  //iterate over the string of characters
  while (i <= str.length) {
    //check if the current character is in the set
    if (hashSet.has(str[i])) {
      //get the maxium length between previous maxium value and the current size of the set
      maxLength = Math.max(maxLength, hashSet.size);
      //if it is in the set -> remove items from the left until the duplicate item is removed
      while (hashSet.has(str[i])) {
        hashSet.delete(str[leftPointer]);
        leftPointer++;
      }
      //and then add the current character
      hashSet.add(str[i]);
    } else {
      //if not in the set, add it to the set
      hashSet.add(str[i]);
    }

    i++;
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
