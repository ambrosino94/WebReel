const header = document.querySelector('header');
const intro = document.querySelector('.intro');

console.log(header);
console.log(intro);
const introSettings = {
  rootMargin: "-150px 0px 0px 0px"
};

const introObserver = new IntersectionObserver(function(entries, introObserver) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      header.classList.add("nav-scrolled")
    }
    else{
      header.classList.remove("nav-scrolled")
    }
  })
}, introSettings);

introObserver.observe(intro);
