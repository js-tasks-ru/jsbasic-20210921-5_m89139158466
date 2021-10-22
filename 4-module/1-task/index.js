

function makeFriendsList(friends) {
  let ul = document.createElement('UL');
  
  for(let i = 0; i < friends.length; i++){
        let li = document.createElement('LI');
     li.innerHTML = (friends[i].firstName + ' ' + friends[i].lastName);
     ul.appendChild(li);
      }
     
      return ul;
}
