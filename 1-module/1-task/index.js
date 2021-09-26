function factorial(n) {
  if (n === 0){
    return 1
  }
  let f = n;
  for (;n>1;n--){
    f = f * (n-1);
  } 
return f;
}