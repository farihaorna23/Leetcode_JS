const lengthOfLastWord = str => {
  //remove the extra space from the end
  let i = str.length - 1;
  let len = 0;

  while (str[i] == " ") {
    i -= 1;
  }
  //iterate from the end to count the length of the last word
  while (i >= 0) {
    if (str[i] == " ") {
      break;
    }
    len += 1;
    i -= 1;
  }

  //return the length
  return len;
};
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
