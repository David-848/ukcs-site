

const menu= document.querySelector('#menu-btn');
const navbar= document.querySelector('nav-bar-link');

menu.addEventListener('click', () =>{
    navbar.classList.toggle('.active');
});
