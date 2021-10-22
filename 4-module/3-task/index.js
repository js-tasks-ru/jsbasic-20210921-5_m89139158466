function highlight(table) {
  let availibility = table.querySelectorAll('tr td:nth-child(4)');
  let gender = table.querySelectorAll('tr td:nth-child(3)');
  let age = table.querySelectorAll('tr td:nth-child(2)');
  for (let i = 1; i < table.rows.length; i++){
    //console.log(i, availibility[i].hasAttribute('data-available'))
     if (!availibility[i].hasAttribute('data-available')) availibility[i].parentNode.hidden = true;  
     if ((availibility[i].getAttribute('data-available') == "true")? availibility[i].parentNode.classList.add("available") : availibility[i].parentNode.classList.add("unavailable"));
     if (gender[i].innerHTML == "m") gender[i].parentNode.classList.add("male");
     if (gender[i].innerHTML == "f") gender[i].parentNode.classList.add("female");
     if (+age[i].innerHTML < 18) gender[i].parentNode.style="text-decoration: line-through";
   }
   
}