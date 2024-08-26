const Line = document.querySelector('.hbline');
const Menu = document.querySelector('.hbmenu');
const Top = document.querySelector('.top');
const Bottom = document.querySelector('.bottom');
const Middle = document.querySelector('.middle');
const Header = document.querySelector('.header');
const Back = document.querySelector('.menu-back');
const Lang = document.querySelector('.lang');

Line.addEventListener('click', () => {
    Menu.classList.toggle('active');
    Top.classList.toggle('active');
    Bottom.classList.toggle('active');
    Line.classList.toggle('active');
    Middle.classList.toggle('active');
    Header.classList.toggle('active');
    Back.classList.toggle('active');
    Lang.classList.toggle('active');
});

Back.addEventListener('click', () => {
    Menu.classList.remove('active');
    Top.classList.remove('active');
    Bottom.classList.remove('active');
    Line.classList.remove('active');
    Middle.classList.remove('active');
    Header.classList.remove('active');
    Back.classList.remove('active');
    Lang.classList.remove('active');
});