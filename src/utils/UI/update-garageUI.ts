import { getCars } from '../../API/garage/get-cars';
import { garageState } from '../../const/store';
import { renderRaceContainer } from '../../components/Garage/components/RaceContainer/RaceContainer';
import { setPaginationBtns } from './set-paginaton-btns';

export const updateGarageUI = async () => {
  const { items, count } = await getCars(garageState.page);

  if (items.length === 0 && garageState.page !== 1) {
    garageState.page--;
    updateGarageUI();
    return;
  }

  garageState.cars = items;
  garageState.total = count ? +count : 0;

  const garageEl = document.querySelector('.garage-section') as HTMLElement;
  garageEl.innerHTML = '';
  garageEl.append(renderRaceContainer());

  const prevBtn = document.getElementById('garage-prev') as HTMLElement;
  const nextBtn = document.getElementById('garage-next') as HTMLElement;
  setPaginationBtns(prevBtn, nextBtn, garageState.page, garageState.limit, garageState.total);
};
