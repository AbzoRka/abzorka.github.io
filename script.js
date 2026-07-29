// Прокрутка бейджей колесиком мыши
const badgeGroup = document.querySelector('.badge-group');

if (badgeGroup) {
  badgeGroup.addEventListener('wheel', (event) => {
    event.preventDefault(); // Отменяем вертикальную прокрутку страницы
    badgeGroup.scrollLeft += event.deltaY; // Перенаправляем прокрутку вбок
  });
}

// Модальное окно
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('close-modal-btn');

  // Функция открытия
  function showNotReadyModal(e) {
    if (e) e.preventDefault();
    if (modal) modal.classList.add('active');
  }

  // Находим все элементы СТРОГО ПОСЛЕ загрузки DOM
  document.querySelectorAll('.not-ready').forEach(element => {
    element.addEventListener('click', showNotReadyModal);
  });

  // Закрытие по кнопке
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Закрытие по клику на фон
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
});
