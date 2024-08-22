const chatButton = document.querySelector('.header__chat');
const chatButton2 = document.querySelector('.icons__chat');
const feedback = document.querySelector('.feedback');
const chatButtonCross = document.querySelector('.feedback__button--cross');
const blurLeft = document.querySelector('.blur__left');

chatButton.addEventListener('click', function () {
    feedback.classList.remove('hidden');
    blurLeft.classList.remove('hidden');
})

chatButton2.addEventListener('click', function () {
    feedback.classList.remove('hidden');
    blurLeft.classList.remove('hidden');
    menu.classList.add('hidden');
    blurRight.classList.add('hidden');
})

chatButtonCross.addEventListener('click', function () {
    feedback.classList.add('hidden');
    blurLeft.classList.add('hidden');
})

blurLeft.addEventListener('click', function () {
    feedback.classList.add('hidden');
    blurLeft.classList.add('hidden');
})