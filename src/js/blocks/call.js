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