import { toggleAllBtns } from '../../../../../../../utils/toggle-all-btns';
import { toggleInterfaceBtns } from '../../../../../../../utils/toggle-interface-btns';
import { garageState } from '../../../../../../../const/store';
import { startStopEngine } from '../../../../../../../API/start-stop-engine';
import { raceCar } from '../../../../../../../utils/race-car';

export const raceAllHandler = async (e: Event) => {
  const target = e.target as HTMLElement;
  target.classList.add('disabled');

  toggleAllBtns(false);
  toggleInterfaceBtns(false);

  const data = await Promise.all(garageState.cars.map((car) => startStopEngine(car.id, 'started')));

  garageState.cars.map((car, idx) => raceCar(car.id, data[idx]));
};
