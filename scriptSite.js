/** 1. Фильтрация по категориям **/
function filterSites() {
    const category = document.getElementById('categoryFilter').value;
    const cards = document.querySelectorAll('.site-card');
    
    let visibleIndex = 0;

    cards.forEach(card => {
        const matchesCategory = (category === 'all' || card.dataset.category === category);

        // 1. Временно сбрасываем класс анимации
        card.classList.remove('animate-cascade');

        if (matchesCategory) {
            card.style.display = 'flex';

            // 2. Обновляем delay только для тех карточек, которые сейчас видны
            card.className = card.className.replace(/\bdelay-\d+\b/g, '').trim();
            card.classList.add(`delay-${visibleIndex + 3}`);
            visibleIndex++;

            // 3. Трюк (force reflow): заставляем браузер принудительно сбросить анимацию
            void card.offsetWidth; 

            // 4. Возвращаем класс анимации — теперь анимируются ВСЕ видимые карточки
            card.classList.add('animate-cascade');
        } else {
            card.style.display = 'none';
        }
    });
}

/** 2. Поиск по названию **/
function searchSites() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.site-card');

    let visibleIndex = 0;

    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const matchesQuery = name.includes(query);

        card.classList.remove('animate-cascade');

        if (matchesQuery) {
            card.style.display = 'flex';

            card.className = card.className.replace(/\bdelay-\d+\b/g, '').trim();
            card.classList.add(`delay-${visibleIndex + 3}`);
            visibleIndex++;

            void card.offsetWidth;
            card.classList.add('animate-cascade');
        } else {
            card.style.display = 'none';
        }
    });
}