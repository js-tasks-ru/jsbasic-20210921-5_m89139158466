function camelize(str) {
  let arr = str.split('-'); 
  arr = arr.map((part, index) => index == 0 ? part : part[0].toUpperCase() + part.slice(1));
  return arr.join('');
}