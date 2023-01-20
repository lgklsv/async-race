import { toggleAllBtns } from '../../../../../../../utils/toggle-all-btns';
import { toggleInterfaceBtns } from '../../../../../../../utils/toggle-interface-btns';
import { garageState } from '../../../../../../../const/store';
import { startStopEngine } from '../../../../../../../API/start-stop-engine';
import { raceAll } from '../../../../../../../utils/race-all';
import { raceCar } from '../../../../../../../utils/race-car';
import { saveWinner } from '../../../../../../../utils/save-winner';

export const raceAllHandler = async (e: Event) => {
  const target = e.target as HTMLElement;
  target.classList.add('disabled');

  toggleAllBtns(false);
  toggleInterfaceBtns(false);

  const data = await Promise.all(garageState.cars.map((car) => startStopEngine(car.id, 'started')));

  const { cars } = garageState;
  const promises = cars.map((car, idx) => raceCar(car.id, data[idx]));
  const winner = await raceAll(promises, cars);
  console.log(winner);
  // Save winner;
  saveWinner(winner);
};
