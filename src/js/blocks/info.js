const buttonMore = document.querySelector('.info__more');
const paragraph = document.querySelectorAll('.info__paragraph--hidden');

buttonMore.addEventListener('click', function () {

    if (buttonMore.textContent === 'Читать далее') {

        for (let i = 0; i < paragraph.length; i++) {
                let element = paragraph[i];
                element.classList.remove('info__paragraph--hidden');
        }

        buttonMore.textContent = 'Скрыть';

    } else {

        for (let i = 0; i < paragraph.length; i++) {
                let element = paragraph[i];
                element.classList.add('info__paragraph--hidden');
            }

        buttonMore.textContent = 'Читать далее';

    }
})