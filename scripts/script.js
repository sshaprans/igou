// "use strict"
// main
const eye = document.querySelector(".vision");
const body = document.querySelector(".body");
eye.addEventListener('click', () =>{
    body.classList.toggle('poor-eyesight')
})

const btnFixed = document.querySelector('.wrapper-contact-fixed');
const btnFixedList = document.querySelector('.contact-fixed');

btnFixed.addEventListener('click', () => {
    btnFixedList.classList.toggle('active');
});

// edition


