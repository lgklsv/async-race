import { createElem } from '../../../../utils/create-element';
import { renderButton } from '../../../Button/Button';
import { renderRace } from './components/Race/Race';
import styles from './RaceContainer.module.scss';
import { garageState } from '../../../../const/store';
import { setPaginationBtns } from '../../../../utils/set-paginaton-btns';
import { updateGarageUI } from '../../../../utils/update-garageUI';

export const renderRaceContainer = (): HTMLElement => {
  const contolsContainer: HTMLElement = createElem('div', styles['garage']);

  const garageHeading: HTMLElement = createElem('div', 'garage__info');

  const heading: HTMLElement = createElem('h2', 'garage__heading');
  heading.innerHTML = `Garage (${garageState.totalCars})`;

  const pageNum: HTMLElement = createElem('h3', 'garage__page-num');
  pageNum.innerHTML = `Page #${garageState.page}`;

  garageHeading.append(heading, pageNum);

  const races: HTMLElement = createElem('div', 'race__container');

  for (let i = 0; i < garageState.cars.length; i++) {
    const car = garageState.cars[i];
    const race: HTMLElement = renderRace(car.name, car.color, car.id);
    races.append(race);
  }

  const paginateBtns: HTMLElement = createElem('div', 'garage__paginate-btns');
  const prevBtn: HTMLElement = renderButton('prev', '');
  prevBtn.id = 'garage-prev';

  prevBtn.onclick = () => {
    garageState.page--;
    updateGarageUI();
  };

  const nextBtn: HTMLElement = renderButton('next', '');
  nextBtn.id = 'garage-next';

  nextBtn.onclick = () => {
    garageState.page++;
    updateGarageUI();
  };

  paginateBtns.append(prevBtn, nextBtn);

  setPaginationBtns(prevBtn, nextBtn, garageState.page, garageState.limit, garageState.totalCars);

  contolsContainer.append(garageHeading, races, paginateBtns);

  return contolsContainer;
};
