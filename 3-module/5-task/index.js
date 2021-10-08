const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73'

function getMinMax(str) {
  let arr = str.split(' ');
  arr.map(item => +item)
  arr = arr.filter(item1 => !isNaN(item1));
   arr.sort((a, b) => a - b);
   let result = {};
   result.max = +arr[arr.length-1];
   result.min = +arr[0];
   return result;
 }

console.log(getMinMax(inputData));