export function showErrorWindow() {
  const wind = document.querySelector('.error-window');
  wind.classList.add('is-open');
}

export function showNotImgWind() {
  const wind = document.querySelector('.not-images');
  wind.classList.add('is-open');
  wind.addEventListener('click', closeNotImgWind);
}

//-------------------------------------------Функції-для-внутрішньої-роботи
function closeNotImgWind(event) {
  const tag = event.target;
  if (tag.tagName === 'P') {
    return;
  }
  const wind = document.querySelector('.not-images');
  wind.classList.remove('is-open');
}
