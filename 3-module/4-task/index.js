function showSalary(users, age) {
  let filtered = users.filter(user => user.age <= age);
  let str = '';
  for(i = 0; i<(filtered.length-1); i++){
    str += filtered[i].name +', ' + filtered[i].balance + '\n'
   }
  str += filtered[i].name +', ' + filtered[i].balance
  return str;
}