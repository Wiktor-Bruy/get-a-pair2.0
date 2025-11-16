import axios from 'axios';
import { showErrorWindow } from './render-function';

export default async function getImagesArray(level, teme) {
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

  // Створення параметрів запиту
  const searchParams = new URLSearchParams({
    key: '52540887-918f2903ad65f90a6d5993705',
    q: teme,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: quantiti,
    page: level,
  });

  //Відправка запиту
  try {
    const answer = await axios.get(`https://pixabay.com/api/?${searchParams}`);
    return answer.data.hits;
  } catch {
    showErrorWindow();
  }
}
