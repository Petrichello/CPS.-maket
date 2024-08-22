equipmentsButton.addEventListener('click', function () {

    if (equipmentsButton.textContent === 'Показать все') {

        for (let i = 0; i < equipmentsItemHidden.length; i++) {
        let element = equipmentsItemHidden[i];
        element.classList.remove('equipments__item--hidden');
    }

    equipmentsButton.textContent = 'Скрыть';

    } else {

        for (let i = 0; i < equipmentsItemHidden.length; i++) {
                let element = equipmentsItemHidden[i];
                element.classList.add('equipments__item--hidden');
            }

            equipmentsButton.textContent = 'Показать все';

    }
})