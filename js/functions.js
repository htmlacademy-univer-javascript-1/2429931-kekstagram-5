console.log("firstFunction");
function firstFunction(str, num){
  console.log(str.length <= num);
}
firstFunction('проверяемая строка', 20);
firstFunction('проверяемая строка', 18);
firstFunction('проверяемая строка', 10);

console.log("secondFunction");
function secondFunction(str){
  var i, len;

  str = str.toLowerCase().replace(/ /g, '');
  len = str.length;

  for(i = 0; i < len / 2; i += 1) {
    if(str.charCodeAt(i) != str.charCodeAt(len - i - 1)) {
      return false;
    }
  }
  return true;
}
console.log(secondFunction('топот'));
console.log(secondFunction('ДовОд'));
console.log(secondFunction('Кекс'));
console.log(secondFunction('Лёша на полке клопа нашёл '));

console.log("thirdFunction");
function thirdFunction(numStr){
  let str = numStr.toString();
  let num = 0;
  let res = NaN;
  let i = 0;
  let k = 10;
  while(str.length - i > 0){
    if(Number.isNaN(parseInt(str[i],10)) === false){
      num = num * k + parseInt(str[i],10);
      res = num;
    }
    i = i + 1;
  }
  return res;
}
console.log(thirdFunction("2023 год"));
console.log(thirdFunction("ECMAScript 2022"));
console.log(thirdFunction("1 кефир, 0.5 батона"));
console.log(thirdFunction("агент 007"));
console.log(thirdFunction("а я томат"));
console.log(thirdFunction(2023));
console.log(thirdFunction(-1));
console.log(thirdFunction(1.5));
