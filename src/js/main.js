// nav menu

const menu = document.getElementById('menu');
const close = document.getElementById('close');
const navMenu= document.getElementById('nav-menu');
menu.addEventListener('click',()=>{
    
    navMenu.classList.toggle('hidden')
})
// close nav-menu
close.addEventListener('click',()=>{
    const navMenu= document.getElementById('nav-menu');
    navMenu.classList.add('hidden')
});

const navLInk = document.querySelectorAll('.link')
navLInk.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden')
    })
});


// header
const header = document.getElementById('header')

window.addEventListener('scroll',()=>{
    this.scrollY > 58 ? header.classList.add('header-shadow') : header.classList.remove('header-shadow');
})


// navigation

const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 100,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.link a[href*="#' + sectionId + '"]')
        .classList.add("active-link");
    } else {
      document
        .querySelector('.link a[href*="#' + sectionId + '"]')
        .classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
