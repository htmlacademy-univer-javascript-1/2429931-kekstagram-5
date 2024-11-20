// "firstFunction"
function firstFunction(str, num){
  return str.length <= num;
}
firstFunction('проверяемая строка', 20);
// console.log(firstFunction('проверяемая строка', 20));
// console.log(firstFunction('проверяемая строка', 18));
// console.log(firstFunction('проверяемая строка', 10));

// "secondFunction"
function secondFunction(str){
  let i;

  str = str.toLowerCase().replace(/ /g, '');
  const len = str.length;

  for(i = 0; i < len / 2; i += 1) {
    if(str.charCodeAt(i) !== str.charCodeAt(len - i - 1)) {
      return false;
    }
  }
  return true;
}

secondFunction('топот');
// console.log(secondFunction('топот'));
// console.log(secondFunction('ДовОд'));
// console.log(secondFunction('Кекс'));
// console.log(secondFunction('Лёша на полке клопа нашёл '));

// "thirdFunction"
function thirdFunction(numStr){
  const str = numStr.toString();
  let num = 0;
  let res = NaN;
  let i = 0;
  const k = 10;
  while(str.length - i > 0){
    if(Number.isNaN(parseInt(str[i],10)) === false){
      num = num * k + parseInt(str[i],10);
      res = num;
    }
    i = i + 1;
  }
  return res;
}
thirdFunction(2023);
// console.log(thirdFunction("2023 год"));
// console.log(thirdFunction("ECMAScript 2022"));
// console.log(thirdFunction("1 кефир, 0.5 батона"));
// console.log(thirdFunction("агент 007"));
// console.log(thirdFunction("а я томат"));
// console.log(thirdFunction(2023));
// console.log(thirdFunction(-1));
// console.log(thirdFunction(1.5));
