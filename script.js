// Скролл для бегущей строки с названиями игр

const stripeScroll = document.querySelector('.stripe__scroll');


stripeScroll.innerHTML += stripeScroll.innerHTML;// Дублируем содержимое, для эффекта бесконечной прокрутки

// Устанавливаем начальное смещение
let scrollPosition = 0;


const contentWidth = stripeScroll.scrollWidth / 2;// общая ширина содержимого

// Функция для бесшовной прокрутки
function scrollContent() {
    scrollPosition -= 1; // Скорость прокрутки (уменьшить число для замедления)
    if (Math.abs(scrollPosition) >= contentWidth) {
        scrollPosition = 0; // Сбрасываем позицию, чтобы зациклить прокрутку
    }
    stripeScroll.style.transform = `translateX(${scrollPosition}px)`; // Смещаем содержимое
    requestAnimationFrame(scrollContent); // Запускаем следующую итерацию
}

scrollContent();// Запускаем анимацию

