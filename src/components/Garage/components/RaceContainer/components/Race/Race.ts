import { createElem } from '../../../../../../utils/element-render/create-element';
import { renderButton } from '../../../../../Button/Button';
import styles from './Race.module.scss';
import { removeHandler } from './RaceHandlers/removeHandler';
import { selectHandler } from './RaceHandlers/selectHandler';
import { raceHandler } from './RaceHandlers/raceHandler';
import { restartHandler } from './RaceHandlers/restartHandler';
import { carImage } from '../../../../../../assets/images/car';

export const renderRace = (name: string, color: string, id: number): HTMLElement => {
  const raceContainer: HTMLElement = createElem('div', styles['race']);
  raceContainer.id = id.toString();

  const btnsTop: HTMLElement = createElem('div', 'race__car-controls');
  const selectBtn: HTMLElement = renderButton('select', '', ['slim', 'control', 'select']);
  selectBtn.id = `select-btn_${id}`;
  selectBtn.onclick = selectHandler;

  const removeBtn: HTMLElement = renderButton('remove', '', ['slim', 'control', 'remove']);
  removeBtn.id = `remove-btn_${id}`;
  removeBtn.onclick = removeHandler;

  const carName: HTMLElement = createElem('p', 'race__car-name');
  carName.innerHTML = name;
  btnsTop.append(selectBtn, removeBtn, carName);

  const btnsBottom: HTMLElement = createElem('div', 'race__car-controls');
  const driveBtn: HTMLElement = renderButton('drive', '', ['race', 'slim', 'control', 'drive']);
  driveBtn.id = `drive-btn_${id}`;
  driveBtn.onclick = raceHandler;

  const restartBtn: HTMLElement = renderButton('restart', '', ['slim', 'control', 'restart']);
  restartBtn.id = `restart-btn_${id}`;
  restartBtn.classList.add('disabled');
  restartBtn.onclick = restartHandler;

  btnsBottom.append(driveBtn, restartBtn);

  const car: HTMLElement = createElem('div', 'race__car');
  car.id = `car_${id}`;
  car.innerHTML = carImage(color);

  const finish: HTMLElement = createElem('div', 'race__finish');
  raceContainer.append(btnsTop, btnsBottom, car, finish);

  return raceContainer;
};
