const Link = document.querySelector('.link-picture');
const One = document.querySelector('.one');

Link.addEventListener('mouseover', () => {
    One.classList.toggle('active');
})