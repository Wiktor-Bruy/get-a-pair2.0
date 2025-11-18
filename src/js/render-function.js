//-----------------------------------------------------Вікно-помилки-запиту
export function showErrorWindow() {
  const wind = document.querySelector('.error-window');
  wind.classList.add('is-open');
}

//----------------------------------Вікно-нестачі-картинок-при-вводі вручну
export function showNotImgWind() {
  const wind = document.querySelector('.not-images');
  wind.classList.add('is-open');
  wind.addEventListener('click', closeNotImgWind);
}

//---------------------------------------------------Рендер-галереї-для-гри
export function renderGameGallery(arr, level) {
  let width;
  let height;
  switch (level) {
    case 1:
      width = (1195 - 30 - 25) / 4;
      height = (595 - 20 - 25) / 3;
      break;
    case 2:
      width = (1195 - 30 - 25) / 4;
      height = (595 - 30 - 25) / 4;
      break;
    case 3:
      width = (1195 - 40 - 25) / 5;
      height = (595 - 30 - 25) / 4;
      break;
    case 4:
      width = (1195 - 50 - 25) / 6;
      height = (595 - 30 - 25) / 4;
      break;
    case 5:
      width = (1195 - 50 - 25) / 6;
      height = (595 - 40 - 25) / 5;
      break;
    case 6:
      width = (1195 - 50 - 25) / 6;
      height = (595 - 50 - 25) / 6;
      break;
    case 7:
      width = (1195 - 60 - 25) / 7;
      height = (595 - 50 - 25) / 6;
      break;
    case 8:
      width = (1195 - 70 - 25) / 8;
      height = (595 - 50 - 25) / 6;
      break;
    case 9:
      width = (1195 - 70 - 25) / 8;
      height = (595 - 60 - 25) / 7;
      break;
    case 9:
      width = (1195 - 70 - 25) / 8;
      height = (595 - 70 - 25) / 8;
      break;
  }

  const imgArr1 = createGameArray(arr).map(el => {
    return {
      src: el,
      rang: Math.ceil(Math.random() * 100),
    };
  });
  const imgArr2 = createGameArray(arr).map(el => {
    return {
      src: el,
      rang: Math.ceil(Math.random() * 100),
    };
  });

  const imgArr = [...imgArr1, ...imgArr2].toSorted((a, b) => a.rang - b.rang);

  let gameArr = [];

  imgArr.forEach(el => {
    const item = document.createElement('li');
    item.classList.add('game-item');
    item.style.width = `${width}px`;
    item.style.height = `${height}px`;

    const span = document.createElement('span');
    span.classList.add('fon');
    item.append(span);

    const img = document.createElement('img');
    img.src = el.src;
    item.append(img);

    gameArr.push(item);
  });

  const game = document.querySelector('.game-gallery');
  game.append(...gameArr);
}

//-------------------------------------------Функції-для-внутрішньої-роботи
//-------------------------------------------------Створення-масиву-для-гри
function createGameArray(arr) {
  const newArr = arr.map(el => el.webformatURL);
  return newArr;
}

//Обробник-події-закриття-модального-вікна-нестачі-картинок-в-ручному-запиті
function closeNotImgWind(event) {
  const tag = event.target;
  if (tag.tagName === 'P') {
    return;
  }
  const wind = document.querySelector('.not-images');
  wind.classList.remove('is-open');
}
