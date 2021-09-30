function sumSalary(salaries) {
  // ваш код...
  let sum = 0;
  for (let key in salaries){
    if (typeof salaries[key] == "number" && salaries[key] != Infinity &&  salaries[key] != -Infinity && isNaN(salaries[key]) != true){
      sum += salaries[key];
    }    
  }
  return sum;
}
