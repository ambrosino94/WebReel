let MenuActive = false;

const menuBtn = document.querySelector('.mobile_menu_btn');
const menuContent = document.querySelector('.mobile_nav_list');

menuBtn.addEventListener('click', () => {
  MenuActive = !MenuActive;

  if(MenuActive){
    menuBtn.classList.add('open');
    menuContent.classList.add('menu_open');
    // menuContent.style.display = 'block';
  }
  else{
    menuBtn.classList.remove('open');
    menuContent.classList.remove('menu_open');
    // menuContent.style.display = 'none';
  }
});
