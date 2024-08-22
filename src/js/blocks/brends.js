brendsButton.addEventListener('click', function () {

    if (brendsButton.textContent === 'Показать все') {

        for (let i = 0; i < brendsItemHidden.length; i++) {
        let element = brendsItemHidden[i];
        element.classList.remove('brends__item--hidden');
    }

    brendsButton.textContent = 'Скрыть';

    } else {

        for (let i = 0; i < brendsItemHidden.length; i++) {
                let element = brendsItemHidden[i];
                element.classList.add('brends__item--hidden');
            }

            brendsButton.textContent = 'Показать все';

    }
})