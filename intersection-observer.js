const header = document.querySelector('header');
const intro = document.querySelector('.intro');
const paginationBtn = document.querySelectorAll('pagination-button');
const hamburger = document.querySelector('.hamburger');
var mobileNavTxt = document.querySelectorAll(".mobile_nav_a");


console.log(header);
console.log(intro);
const introSettings = {
  rootMargin: "-150px 0px 0px 0px"
};

const introObserver = new IntersectionObserver(function(entries, introObserver) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      header.classList.add("nav-scrolled")
      hamburger.classList.add("hamburger_scrolled")

      for(var i = 0; i < mobileNavTxt.length; i++){
        mobileNavTxt[i].classList.add("mobile_nav_a_scrolled")
      }

    }
    else{
      header.classList.remove("nav-scrolled")
      hamburger.classList.remove("hamburger_scrolled")

      for(var i = 0; i < mobileNavTxt.length; i++){
        mobileNavTxt[i].classList.remove("mobile_nav_a_scrolled")
      }
      for(var i = 0; i < paginationWrap.length; i++){
        paginationWrap[i].style.color = "var(--color-bg)";
      }
    }
  })
}, introSettings);

introObserver.observe(intro);
