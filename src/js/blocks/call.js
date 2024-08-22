const callButton = document.querySelector('.header__call');
const callButton2 = document.querySelector('.icons__call');
const call = document.querySelector('.call');
const callButtonCross = document.querySelector('.call__button--cross');
const blurLeft = document.querySelector('.blur__left');

callButton.addEventListener('click', function () {
    call.classList.remove('hidden');
    blurLeft.classList.remove('hidden');
})

callButton2.addEventListener('click', function () {
    call.classList.remove('hidden');
    blurLeft.classList.remove('hidden');
    menu.classList.add('hidden');
    blurRight.classList.add('hidden');
})

callButtonCross.addEventListener('click', function () {
    call.classList.add('hidden');
    blurLeft.classList.add('hidden');
})

blurLeft.addEventListener('click', function () {
    call.classList.add('hidden');
    blurLeft.classList.add('hidden');
})