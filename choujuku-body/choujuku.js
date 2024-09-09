const One = document.querySelector('.one');
const Two = document.querySelector('.two');
const Three = document.querySelector('.three');
const Four = document.querySelector('.four');
const Five = document.querySelector('.five');
const Six = document.querySelector('.six');
const Hone = document.querySelector('.hoverone');
const Htwo = document.querySelector('.hovertwo');
const Hthree = document.querySelector('.hoverthree');
const Hfour = document.querySelector('.hoverfour');
const Hfive = document.querySelector('.hoverfive');
const Hsix = document.querySelector('.hoversix');

Hone.addEventListener('mouseover', () => {
    One.classList.toggle('active');
})
Htwo.addEventListener('mouseover', () => {
    Two.classList.toggle('active');    
})
Hthree.addEventListener('mouseover', () => {
    Three.classList.toggle('active');    
})
Hfour.addEventListener('mouseover', () => {
    Four.classList.toggle('active');    
})
Hfive.addEventListener('mouseover', () => {
    Five.classList.toggle('active');    
})
Hsix.addEventListener('mouseover', () => {
    Six.classList.toggle('active');    
})