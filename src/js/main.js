// nav menu

const menu = document.getElementById('menu');
const close = document.getElementById('close');
menu.addEventListener('click',()=>{
    const navMenu= document.getElementById('nav-menu');
    navMenu.classList.toggle('hidden')
})

close.addEventListener('click',()=>{
    const navMenu= document.getElementById('nav-menu');
    navMenu.classList.add('hidden')
});
