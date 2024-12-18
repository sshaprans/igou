"use strict"

// modal
const modal = document.querySelector("#modal");
const modalBtn = document.querySelectorAll(".btn-js");
const closeBtn = document.getElementsByClassName("modal-close")[0];
const overlay = document.querySelector(".overlay");

function preventScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollTop}px`;
    document.body.dataset.scrollPosition = scrollTop.toString();
}

function restoreScroll() {
    const scrollPosition = parseInt(document.body.dataset.scrollPosition || '0', 10);
    document.body.style.position = '';
    document.body.style.top = '';
    delete document.body.dataset.scrollPosition;
    window.scrollTo(0, scrollPosition);
}

modalBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent page reload
        overlay.classList.add("open");
        modal.classList.add("open");
        modal.classList.add("modal-an");
        preventScroll();
    });
});

closeBtn.onclick = function(event) {
    event.preventDefault();
    overlay.classList.remove("open");
    modal.classList.remove("open");
    restoreScroll();
};

window.onclick = function(event) {
    if (event.target === overlay) {
        overlay.classList.remove("open");
        modal.classList.remove("open");
        restoreScroll();
    }
};



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


