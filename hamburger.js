let MenuActive = false;

const menuBtn = document.querySelector('.mobile_menu_btn');
const menuContent = document.querySelector('.mobile_nav_list');
var menuTxt = document.querySelectorAll('.mobile_nav_a');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
  MenuActive = !MenuActive;

  if(MenuActive){
    menuBtn.classList.add('open');
    menuContent.classList.add('menu_open');
    overlay.style.display = 'block';

    for(var i = 0; i < menuTxt.length; i++){
      menuTxt[i].style.display = 'block';
    }
  }
  else{
    menuBtn.classList.remove('open');
    menuContent.classList.remove('menu_open');
    overlay.style.display = 'none';

    for(var i = 0; i < menuTxt.length; i++){
      menuTxt[i].style.display = 'none';
    }
  }
});
