import { garageState } from '../const/store';

export const setPaginationBtns = (prevBtn: HTMLElement, nextBtn: HTMLElement): void => {
  if (garageState.page * garageState.limit < garageState.totalCars) {
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  }
  if (garageState.page > 1) {
    prevBtn.classList.remove('disabled');
  } else {
    prevBtn.classList.add('disabled');
  }
};
