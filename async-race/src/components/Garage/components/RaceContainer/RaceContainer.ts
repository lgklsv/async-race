import { createElem } from '../../../../utils/create-element';
import { renderButton } from '../../../Button/Button';
import { renderRace } from './components/Race/Race';
import styles from './RaceContainer.module.scss';

export const renderRaceContainer = (): HTMLElement => {
  const contolsContainer: HTMLElement = createElem('div', styles['garage-section']);

  const garageHeading: HTMLElement = createElem('div', 'garage__info')

  const heading: HTMLElement = createElem('h2', 'garage__heading');
  heading.innerHTML = `Garage (${4})`;

  const pageNum: HTMLElement = createElem('h3', 'garage__page-num');
  pageNum.innerHTML = `Page #${1}`;

  garageHeading.append(heading, pageNum);

  const races: HTMLElement = createElem('div', 'race__container');

  for(let i = 0; i < 4; i++) {
    const race: HTMLElement = renderRace('purple');
    races.append(race);
  }

  const paginateBtns: HTMLElement = createElem('div', 'garage__paginate-btns');
  const prevBtn: HTMLElement = renderButton('prev');
  const nextBtn: HTMLElement = renderButton('next');
  paginateBtns.append(prevBtn, nextBtn);

  contolsContainer.append(garageHeading, races, paginateBtns);

  return contolsContainer;
};
