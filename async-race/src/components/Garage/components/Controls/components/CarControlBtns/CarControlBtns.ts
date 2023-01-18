import { createCar } from '../../../../../../API/create-car';
import { garage } from '../../../../../../const/store';
import { createElem } from '../../../../../../utils/create-element';
import { generateRandomCars } from '../../../../../../utils/generate-random-cars';
import { raceCar } from '../../../../../../utils/race-car';
import { restartCar } from '../../../../../../utils/restart-car';
import { updateGarageUI } from '../../../../../../utils/update-garageUI';
import { renderButton } from '../../../../../Button/Button';
import styles from './CarControlBtns.module.scss';

export const renderCarControlBtns = (): HTMLElement => {
  const carControlBtnsContainer: HTMLElement = createElem('div', styles['controls__car-control']);
  const raceBtn: HTMLElement = renderButton('race', '', ['race']);
  raceBtn.id = 'race-all';

  raceBtn.onclick = (e: Event) => {
    const target = e.target as HTMLElement;
    target.classList.add('disabled');
    garage.cars.map((car) => raceCar(car.id));
  };

  const resetBtn: HTMLElement = renderButton('reset', '');
  resetBtn.onclick = async (e: Event) => {
    const target = e.target as HTMLElement;
    target.classList.add('disabled');
    const allResProm = garage.cars.map((car) => restartCar(car.id));
    await Promise.all(allResProm);
    target.classList.remove('disabled');
    raceBtn.classList.remove('disabled');
  };

  const generateCarsBtn: HTMLElement = renderButton('generate cars', '', ['generate-cars']);

  generateCarsBtn.onclick = async () => {
    await Promise.all(generateRandomCars().map((car) => createCar(car)));
    await updateGarageUI();
  };

  carControlBtnsContainer.append(raceBtn, resetBtn, generateCarsBtn);

  return carControlBtnsContainer;
};
