let button = document.querySelector('.main__more');
let itemHidden = document.querySelectorAll('.item--hidden');

button.addEventListener('click', function () {

    if (button.textContent === 'Показать все') {

        for (let i = 0; i < itemHidden.length; i++) {
        let element = itemHidden[i];
        element.classList.remove('item--hidden');
    }

    button.textContent = 'Скрыть';

    } else {

        for (let i = 0; i < itemHidden.length; i++) {
                let element = itemHidden[i];
                element.classList.add('item--hidden');
            }

            button.textContent = 'Показать все';

    }
})

document.addEventListener('DOMContentLoaded', () => {

    const width = window.innerWidth

    if (width < 768){
        const swiper = new Swiper('.swiper', {
        spaceBetween: 16,
        slidesPerView: (width + 16)/(width * 0.75 + 16),
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
    })
    }
});


    




