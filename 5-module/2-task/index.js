function toggleText() {
  let tog = document.querySelector('.toggle-text-button');
  let tex = document.getElementById('text');
  console.log(tex);
  tog.onclick = function(){
    if (tex.hidden == false) tex.hidden = true;
    else tex.hidden = false;
  }
}
