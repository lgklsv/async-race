import { garage } from '../const/store';

export const setPaginationBtns = (prevBtn: HTMLElement, nextBtn: HTMLElement): void => {
  if (garage.page * garage.limit < garage.totalCars) {
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  }
  if (garage.page > 1) {
    prevBtn.classList.remove('disabled');
  } else {
    prevBtn.classList.add('disabled');
  }
};
