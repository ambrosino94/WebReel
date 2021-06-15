let MenuActive = false;

const menuBtn = document.querySelector('.mobile_menu_btn');
// const menuContent = document.querySelector('.mobile_nav_list');
// var menuTxt = document.querySelectorAll('.mobile_nav_a');
// const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {MenuActive = hamburgerDynamic(MenuActive,null);});

function hamburgerDynamic(MenuActive, location){

  const menuBtn = document.querySelector('.mobile_menu_btn');
  const menuContent = document.querySelector('.mobile_nav_list');
  var menuTxt = document.querySelectorAll('.mobile_nav_a');
  const overlay = document.querySelector('.overlay');

  MenuActive = !MenuActive;

  if (location) {
    document.getElementById(location.slice(1)).scrollIntoView({behavior: 'smooth'});
  }

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

  return MenuActive;
}

const mobileNav = document.querySelectorAll(".m_nav_list");
mobileNav.forEach(element => element.addEventListener('touchstart', () => {MenuActive = hamburgerDynamic(true, element.children[0].hash);}));
mobileNav.forEach(element => element.addEventListener('click', () => {MenuActive = hamburgerDynamic(true, element.children[0].hash);}));


// MenuActive = !MenuActive;
//
// if(MenuActive){
//   menuBtn.classList.add('open');
//   menuContent.classList.add('menu_open');
//   overlay.style.display = 'block';
//
//   for(var i = 0; i < menuTxt.length; i++){
//     menuTxt[i].style.display = 'block';
//   }
// }
// else{
//   menuBtn.classList.remove('open');
//   menuContent.classList.remove('menu_open');
//   overlay.style.display = 'none';
//
//   for(var i = 0; i < menuTxt.length; i++){
//     menuTxt[i].style.display = 'none';
//   }
// }
