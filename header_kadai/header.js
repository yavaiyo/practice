const Open = document.querySelector('.menu-open');
const Menu = document.querySelector('.rightlink');
const Close = document.querySelector('.close');
const Back = document.querySelector('.background');

Open.addEventListener('click', () => {
    Menu.classList.add('active');
    Back.classList.add('active');
});

Close.addEventListener('click', () => {
    Menu.classList.remove('active');
    Back.classList.remove('active');
});