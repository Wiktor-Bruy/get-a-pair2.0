//-------------------------------------------------------------Порівняння-картинок
export async function comparisonImg(span1, span2) {
  const delay = await new Promise(res => {
    setTimeout(() => res(2), 500);
  });
  const img1 = span1.nextElementSibling;
  const img2 = span2.nextElementSibling;
  if (img1.src != img2.src) {
    span1.classList.remove('invis');
    span2.classList.remove('invis');
    return;
  } else {
    span1.parentElement.classList.add('hidden');
    span2.parentElement.classList.add('hidden');
    return;
  }
}

//----------------------------------------------Перевірка-чи-всі-картинки-відкрито
export function isRoundOwer() {
  const galleryItems = document.querySelectorAll('.game-item');
  let bolleans = [];
  galleryItems.forEach(el => {
    const boll = el.classList.contains('hidden');
    bolleans.push(boll);
  });
  const isOwer = bolleans.every(el => el === true);
  return isOwer;
}
