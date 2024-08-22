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