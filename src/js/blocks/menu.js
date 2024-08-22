const burgerButton = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const menuButtonCross = document.querySelector('.menu__button--cross');
const blurRight = document.querySelector('.blur__right');

burgerButton.addEventListener('click', function () {
    menu.classList.remove('hidden');
    blurRight.classList.remove('hidden');
})

menuButtonCross.addEventListener('click', function () {
    menu.classList.add('hidden');
    blurRight.classList.add('hidden');
})

blurRight.addEventListener('click', function () {
    menu.classList.add('hidden');
    blurRight.classList.add('hidden');
})








