const longestCommonPrefix = arr => {
  if (arr.length <= 0) {
    return "";
  }

  let commonPrefix = "";

  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (i > arr[j].length || arr[j][i] != arr[0][i]) {
        return commonPrefix;
      }
    }
    commonPrefix += arr[0][i];
  }
  return commonPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
