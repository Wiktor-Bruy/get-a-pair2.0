'use strict';

//-------------------------------------------------------------Глобальні-змінні
let teme;
let level = 1;
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
}
//-----------------------------------------------------------Вибір-теми-в-формі
function enterTeme(event) {
  event.preventDefault();
  teme = event.target.elements.teme.value.trim();
  hideStartPage();
  showGamePage();
}
//-----------------------------------------------------------------------------

//-------------------------------------------------------------------Логіка-гри
//---------------------------------------------Обробка-подій-стартової-сторінки
refs.startList.addEventListener('click', clickTeme);
refs.form.addEventListener('submit', enterTeme);
//-----------------------------------------------------------------------------
