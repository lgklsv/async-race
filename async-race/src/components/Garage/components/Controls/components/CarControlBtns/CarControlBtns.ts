import { createCar } from '../../../../../../API/create-car';
import { createElem } from '../../../../../../utils/create-element';
import { generateRandomCars } from '../../../../../../utils/generate-random-cars';
import { updateGarageUI } from '../../../../../../utils/update-garageUI';
import { renderButton } from '../../../../../Button/Button';
import styles from './CarControlBtns.module.scss';
import { raceAllHandler } from './ControlHandlers/RaceAllHandler';
import { resetAllHandler } from './ControlHandlers/ResetAllHandler';

export const renderCarControlBtns = (): HTMLElement => {
  const carControlBtnsContainer: HTMLElement = createElem('div', styles['controls__car-control']);
  const raceBtn: HTMLElement = renderButton('race', '', ['race']);
  raceBtn.id = 'race-all';
  raceBtn.onclick = raceAllHandler;

  const resetBtn: HTMLElement = renderButton('reset', '');
  resetBtn.onclick = resetAllHandler;

  const generateCarsBtn: HTMLElement = renderButton('generate cars', '', ['generate-cars']);

  generateCarsBtn.onclick = async () => {
    await Promise.all(generateRandomCars().map((car) => createCar(car)));
    await updateGarageUI();
  };

  carControlBtnsContainer.append(raceBtn, resetBtn, generateCarsBtn);

  return carControlBtnsContainer;
};
