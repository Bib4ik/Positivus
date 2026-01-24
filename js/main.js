const swiperTop = new Swiper('.swiper__slider', {
    // Optional parameters
    effect: 'slide',
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.info__item');

    items.forEach((item) => {
        const content = item.querySelector('p');
        const line = item.querySelector('.info__line');
        const btn = item.querySelector('button');

        // Скрываем контент для ВСЕХ карточек по умолчанию
        if (content) content.classList.add('none');
        if (line) line.classList.add('none');

        // Устанавливаем белый фон и плюс для всех карточек
        item.classList.remove('info_item_bg_green');
        item.classList.add('info_item_bg_white');

        if (btn) {
            btn.className = 'info__btn-white';
            const btnImg = btn.querySelector('img');
            if (btnImg) btnImg.src = '/assets/icons/plus-icon.png';
        }

        // Добавляем обработчик клика
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const btnImg = btn.querySelector('img');
                const isHidden = content.classList.contains('none');

                if (isHidden) {
                    // Открываем
                    content.classList.remove('none');
                    line.classList.remove('none');
                    if (btnImg) btnImg.src = '/assets/icons/minus-icon.png';

                    item.classList.remove('info_item_bg_white');
                    item.classList.add('info_item_bg_green');

                    btn.className = 'info__btn';
                } else {
                    // Закрываем
                    content.classList.add('none');
                    line.classList.add('none');
                    if (btnImg) btnImg.src = '/assets/icons/plus-icon.png';

                    item.classList.remove('info_item_bg_green');
                    item.classList.add('info_item_bg_white');

                    btn.className = 'info__btn-white';
                }
            });
        }
    });
});
