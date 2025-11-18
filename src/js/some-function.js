//-------------------------------------------------------------Порівняння-картинок
export function comparisonImg(span1, span2) {
  const img1 = span1.nextElementSibling;
  const img2 = span2.nextElementSibling;
  if (img1.src != img2.src) {
    span1.cllassList.remove('invis');
    span2.cllassList.remove('invis');
    return;
  } else {
    span1.parentElement.cllassList.add('hidden');
    span2.parentElement.cllassList.add('hidden');
    return;
  }
}
