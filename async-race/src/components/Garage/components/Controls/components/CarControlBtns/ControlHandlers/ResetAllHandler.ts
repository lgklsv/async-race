import { garageState } from '../../../../../../../const/store';
import { restartCar } from '../../../../../../../utils/restart-car';
import { toggleInterfaceBtns } from '../../../../../../../utils/toggle-interface-btns';

export const resetAllHandler = async (e: Event) => {
  const target = e.target as HTMLElement;
  target.classList.add('disabled');

  const raceAllBtn = document.getElementById('race-all') as HTMLElement;
  raceAllBtn.classList.remove('disabled');

  const allResProm = garageState.cars.map((car) => restartCar(car.id));
  await Promise.all(allResProm);
  // Enable interface
  toggleInterfaceBtns(true);
  target.classList.remove('disabled');
};
