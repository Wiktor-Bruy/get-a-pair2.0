'use strict';

import getArrayImages from './js/get-imsge';
import * as render from './js/render-function';

//-------------------------------------------------------------Глобальні-змінні
let teme;
let level = 1;
let page;
if (level === 1) {
  page = 1;
} else {
  page = Math.ceil(level / 2);
}
const refs = {
  startPage: document.querySelector('.start-page'),
  startList: document.querySelector('.list-teme'),
  form: document.querySelector('.enter-teme'),
  gamePage: document.querySelector('.game-page'),
};
//-----------------------------------------------------------------------------

//----------------------------------------------------------------------Функції
//----------------------------------------Відкриття-закриття-стартової-сторінки
function hideStartPage() {
  refs.startPage.classList.add('is-close');
}
function showStartPage() {
  refs.startPage.classList.remove('is-close');
}
//----------------------------------------------Відкриття-закриття-сторінки-гри
function showGamePage() {
  refs.gamePage.classList.add('is-open');
}
function hideGamePage() {
  refs.gamePage.classList.remove('is-open');
}
//------------------------------------------------------------Кліки-вибору-теми
function clickTeme(event) {
  const target = event.target;
  if (target.tagName != 'LI') {
    return;
  }
  teme = target.dataset.value;
  hideStartPage();
  showGamePage();
  getArrayImages(page, teme).then(answer => {
    console.log(answer);
  });
}
//-----------------------------------------------------------Вибір-теми-в-формі
function enterTeme(event) {
  event.preventDefault();
  teme = event.target.elements.teme.value.trim();
  getArrayImages(page, teme).then(answer => {
    let quantiti;
    switch (level) {
      case 1:
        quantiti = 12;
        break;
      case 2:
        quantiti = 15;
        break;
      case 3:
        quantiti = 20;
        break;
      case 4:
        quantiti = 25;
        break;
      case 5:
        quantiti = 30;
        break;
      case 6:
        quantiti = 36;
        break;
      case 7:
        quantiti = 42;
        break;
      case 8:
        quantiti = 49;
        break;
      case 9:
        quantiti = 56;
        break;
      case 10:
        quantiti = 64;
        break;
    }
    if (answer.length < quantiti) {
      refs.form.reset();
      render.showNotImgWind();
    } else {
      hideStartPage();
      showGamePage();
      console.log(answer);
      refs.form.reset();
    }
  });
}
//-----------------------------------------------------------------------------

//-------------------------------------------------------------------Логіка-гри
//---------------------------------------------Обробка-подій-стартової-сторінки
refs.startList.addEventListener('click', clickTeme);
refs.form.addEventListener('submit', enterTeme);
//-----------------------------------------------------------------------------
