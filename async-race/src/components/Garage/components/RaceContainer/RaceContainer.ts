import { createElem } from '../../../../utils/create-element';
import { renderRace } from './components/Race/Race';
import styles from './RaceContainer.module.scss';
import { garageState } from '../../../../const/store';
import { updateGarageUI } from '../../../../utils/update-garageUI';
import { renderPagination } from '../../../Pagination/Pagination';

export const renderRaceContainer = (): HTMLElement => {
  const contolsContainer: HTMLElement = createElem('div', styles['garage']);

  const garageHeading: HTMLElement = createElem('div', 'garage__info');

  const heading: HTMLElement = createElem('h2', 'garage__heading');
  heading.innerHTML = `Garage (${garageState.total})`;

  const pageNum: HTMLElement = createElem('h3', 'garage__page-num');
  pageNum.innerHTML = `Page #${garageState.page}`;

  garageHeading.append(heading, pageNum);

  const races: HTMLElement = createElem('div', 'race__container');
  for (let i = 0; i < garageState.cars.length; i++) {
    const car = garageState.cars[i];
    const race: HTMLElement = renderRace(car.name, car.color, car.id);
    races.append(race);
  }

  const paginateBtns: HTMLElement = renderPagination(garageState, updateGarageUI, 'garage');

  contolsContainer.append(garageHeading, races, paginateBtns);

  return contolsContainer;
};
