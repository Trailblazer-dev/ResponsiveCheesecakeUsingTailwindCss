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
