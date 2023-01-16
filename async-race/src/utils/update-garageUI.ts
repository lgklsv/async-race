import { getCars } from '../API/get-cars';
import { garage } from '../const/store';
import { renderRaceContainer } from '../components/Garage/components/RaceContainer/RaceContainer';

export const updateGarageUI = async () => {
  const { items, count } = await getCars(garage.page);

  garage.cars = items;
  garage.totalCars = count;

  const garageEl = document.querySelector('.garage-section') as HTMLElement;
  garageEl.innerHTML = '';
  garageEl.append(renderRaceContainer());
};
