'use strict';

import getArrayImages from './js/get-imsge';
import * as render from './js/render-function';
import * as some from './js/some-function';

//-------------------------------------------------------------Глобальні-змінні
const saveLevel = sessionStorage.getItem(level);
const saveTeme = sessionStorage.getItem(teme);
const savePage = sessionStorage.getItem(page);
let teme = saveTeme || undefined;
let level = saveLevel || 1;
let page = savePage || 1;
const refs = {
  startPage: document.querySelector('.start-page'),
  startList: document.querySelector('.list-teme'),
  form: document.querySelector('.enter-teme'),
  gamePage: document.querySelector('.game-page'),
  gameGallery: document.querySelector('.game-gallery'),
  goFirstPageBtn: document.querySelector('.go-first'),
  btnContinue: document.querySelector('.btn-continue'),
};
let isComparwe = false;
let span1;
let span2;
let timeStart;

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
  const input = target.dataset.value;
  if (teme != input) {
    teme = input;
    level = 1;
    page = 1;
  }
  hideStartPage();
  showGamePage();
  getArrayImages(page, teme).then(answer => {
    render.renderGameGallery(answer, level);
    timeStart = Date.now();
  });
}
//-----------------------------------------------------------Вибір-теми-в-формі
function enterTeme(event) {
  event.preventDefault();
  const input = event.target.elements.teme.value.trim().toLowerCase();
  if (teme != input) {
    teme = input;
    level = 1;
    page = 1;
  }
  getArrayImages(page, teme).then(answer => {
    let quantiti;
    switch (level) {
      case 1:
        quantiti = 6;
        break;
      case 2:
        quantiti = 8;
        break;
      case 3:
        quantiti = 10;
        break;
      case 4:
        quantiti = 12;
        break;
      case 5:
        quantiti = 15;
        break;
      case 6:
        quantiti = 18;
        break;
      case 7:
        quantiti = 21;
        break;
      case 8:
        quantiti = 24;
        break;
      case 9:
        quantiti = 28;
        break;
      case 10:
        quantiti = 32;
        break;
    }
    if (answer.length < quantiti) {
      refs.form.reset();
      render.showNotImgWind();
    } else {
      hideStartPage();
      showGamePage();
      refs.form.reset();
      render.renderGameGallery(answer, level);
      timeStart = Date.now();
    }
  });
}

//---------------------------------------------------Перехід-на-наступний-раунд
function nextRound() {
  level++;
  page = Math.ceil(level / 2);
}

//-------------------------------------------------Перехід-на-головну-з-модалки
function goFirstPage() {
  refs.gameGallery.innerHTML = '';
  render.closeRoundOwerWindow();
  hideGamePage();
  showStartPage();
  level = 1;
  teme = undefined;
  page = 1;
}

//--------------------------------------------------Обробка-кліків-по-картинкам
function game(event) {
  if (isComparwe) {
    return;
  }
  const elem = event.target;
  if (elem.tagName != 'SPAN') {
    return;
  }
  if (!span1) {
    span1 = elem;
    span1.classList.add('invis');
  } else {
    span2 = elem;
    span2.classList.add('invis');
    isComparwe = true;
    some.comparisonImg(span1, span2).then(() => {
      isComparwe = false;
      span1 = 0;
      span2 = 0;
      const isOwer = some.isRoundOwer();
      if (isOwer) {
        render.showRounrOwerWindow(timeStart, level);
      }
    });
  }
}

//-----------------------------------------------------------------------------

//-------------------------------------------------------------------Логіка-гри
//---------------------------------------------Обробка-подій-стартової-сторінки
refs.startList.addEventListener('click', clickTeme);
refs.form.addEventListener('submit', enterTeme);

//-----------------------------------------------------Кліки-по-картинкам-у-грі
refs.gameGallery.addEventListener('click', game);

//---------------------------------------------------------------Кнопки-модалки
refs.goFirstPageBtn.addEventListener('click', goFirstPage);
refs.btnContinue.addEventListener('click', nextRound);

//-----------------------------------------------------------------------------
