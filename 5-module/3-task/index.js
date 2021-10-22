function initCarousel() {
  let btnright = document.querySelector('.carousel__arrow_right');
  let btnleft = document.querySelector('.carousel__arrow_left');
  let elem = document.querySelector('.carousel__inner');
  let movepx = elem.offsetWidth;
  let num = 1;
  btnleft.style.display = (num == 1) ? 'none': '';
  btnright.onclick = function(){
    num++
    btnleft.style.display = (num == 1) ? 'none': '';
    btnright.style.display = (num == 4) ? 'none': '';
    elem.style.transform += `translateX(-${movepx}px)`;
  }
  btnleft.onclick = function(){
    num--;
    btnleft.style.display = (num == 1) ? 'none': '';
    btnright.style.display = (num == 4) ? 'none': '';
    elem.style.transform += `translateX(+${movepx}px)`;
  }


}
