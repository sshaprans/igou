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

// Знаходимо всі кнопки з класом .open-modal
const openModalButtons = document.querySelectorAll('.open-modal');

// Знаходимо модальне вікно і кнопку для закриття
const modal = document.getElementById('modal');
const closeModalButton = document.querySelector('.close');

// Додаємо обробник подій для кожної кнопки
openModalButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Запобігаємо переходу за посиланням
        modal.style.display = 'block'; // Показуємо модальне вікно
    });
});

// Закриваємо модальне вікно при натисканні на "Х"
closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Закриваємо модальне вікно при натисканні за межами вікна
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

