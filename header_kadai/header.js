const Open = document.querySelector('menu-open');
const Menu = document.querySelector('rightlink');

Open.addEventListener('click', () => {
    Menu.classList.toggle('active');
});
