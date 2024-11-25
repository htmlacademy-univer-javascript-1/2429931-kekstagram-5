// "firstFunction"
function compareLengthString(checkStr, num){
  return checkStr.length <= num;
}
console.log(compareLengthString('проверяемая строка', 20));
console.log(compareLengthString('проверяемая строка', 18));
console.log(compareLengthString('проверяемая строка', 10));

// "secondFunction"
function getPalindrome(checkStr){
  let i;

  checkStr = checkStr.toLowerCase().replaceAll(" ", "");
  const len = checkStr.length;
  for(i = 0; i < len / 2; i += 1) {
    if(checkStr.charCodeAt(i) !== checkStr.charCodeAt(len - i - 1)) {
      return false;
    }
  }
  return true;
}

console.log(getPalindrome('то пот'));
console.log(getPalindrome('ДовОд'));
console.log(getPalindrome('Кекс'));
console.log(getPalindrome('Лёша на полке клопа нашёл'));

// "thirdFunction"
function getNumber(checkStr){
  const newStr = checkStr.toString();
  let hasNum = 0;
  let res = NaN;
  let i = 0;
  while(newStr.length - i > 0){
    if(Number.isNaN(parseInt(newStr[i],10)) === false){
      hasNum = hasNum * 10 + parseInt(newStr[i],10);
      res = hasNum;
    }
    i = i + 1;
  }
  return res;
}

console.log(getNumber("2023 год"));
console.log(getNumber("ECMAScript 2022"));
console.log(getNumber("1 кефир, 0.5 батона"));
console.log(getNumber("агент 007"));
console.log(getNumber("а я томат"));
console.log(getNumber(2023));
console.log(getNumber(-1));
console.log(getNumber(1.5));
