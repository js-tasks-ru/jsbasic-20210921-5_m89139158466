function checkSpam(str) {
  // ваш код... возвращающую true, если str содержит '1xBet' или 'XXX', а иначе false
 let Upp =  str.toUpperCase()
 return Upp.includes("XXX") || Upp.includes("1XBET");
}
