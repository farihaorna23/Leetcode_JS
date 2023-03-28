const romanToInt = str => {
  let check_value = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;

  for (let i = 0; i < str.length; i++) {
    if (!check_value[str[i]]) {
      return -1;
    }
    if (str[i + 1] && check_value[str[i]] < check_value[str[i + 1]]) {
      total -= check_value[str[i]];
    } else {
      total += check_value[str[i]];
    }
  }

  return total;
};

console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
