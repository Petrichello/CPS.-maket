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
})

