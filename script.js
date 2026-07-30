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

const eggBtn = document.getElementById('easter-egg-btn');
const warningModal = document.getElementById('warning-modal');
const videoModal = document.getElementById('video-modal');
const confirmBtn = document.getElementById('confirm-btn');
const cancelBtn = document.getElementById('cancel-btn');
const closeVideoBtn = document.getElementById('close-video-btn');
const lobsterVideo = document.getElementById('lobster-video');

// 1. Клик по АВАТАРКЕ — показываем предупреждение
eggBtn.addEventListener('click', () => {
  warningModal.classList.remove('hidden');
});

// 2. Отмена — закрываем табличку
cancelBtn.addEventListener('click', () => {
  warningModal.classList.add('hidden');
});

// 3. Подтверждение — открываем видео и пускаем звук
confirmBtn.addEventListener('click', () => {
  warningModal.classList.add('hidden');
  videoModal.classList.remove('hidden');
  
  lobsterVideo.currentTime = 0;
  lobsterVideo.play();
});

// 4. Закрытие видео
closeVideoBtn.addEventListener('click', () => {
  lobsterVideo.pause();
  videoModal.classList.add('hidden');
});

// Находим ВСЕ ссылки в навигации, которые ведут к блокам через #
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    
    if (targetId === '#' || !targetId) return;
    
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault();

      // 1. Плавный скролл до центра экрана
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

      // 2. Запускаем подсветку
      targetElement.classList.add('highlight-target');

      // 3. Снимаем класс через 2.5 секунды
      setTimeout(() => {
        targetElement.classList.remove('highlight-target');
      }, 2500);
    }
  });
});
