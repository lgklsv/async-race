import { garageState } from '../../../../../../../const/store';
import { restartCar } from '../../../../../../../utils/race/restart-car';
import { toggleInterfaceBtns } from '../../../../../../../utils/UI/toggle-interface-btns';
import { togglePaginationBtns } from '../../../../../../../utils/UI/toggle-pagination-btns';

export const resetAllHandler = async (e: Event) => {
  const target = e.target as HTMLElement;
  target.classList.add('disabled');
  togglePaginationBtns(
    false,
    'garage-prev',
    'garage-next',
    garageState.page,
    garageState.limit,
    garageState.total
  );

  garageState.breakCars = false;
  if (garageState.cancelObj) {
    garageState.cancelObj.cancel();
  }

  const allResProm = garageState.cars.map((car) => restartCar(car.id));
  await Promise.all(allResProm);
  // Enable interface
  const header = document.querySelector('.header__nav') as HTMLElement;
  header.classList.remove('disabled');
  const raceAllBtn = document.getElementById('race-all') as HTMLElement;
  raceAllBtn.classList.remove('disabled');

  toggleInterfaceBtns(true);
  togglePaginationBtns(
    true,
    'garage-prev',
    'garage-next',
    garageState.page,
    garageState.limit,
    garageState.total
  );
  target.classList.remove('disabled');

  const winnerMesEL = document.querySelector('.winner-message') as HTMLElement;
  if (winnerMesEL) {
    winnerMesEL.remove();
  }
};
