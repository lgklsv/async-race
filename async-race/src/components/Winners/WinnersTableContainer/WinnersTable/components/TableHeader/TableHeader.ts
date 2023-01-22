import { winnersState } from '../../../../../../const/store';
import { createElem } from '../../../../../../utils/element-render/create-element';
import { sortingHandler } from './SortingHandler';
import styles from './TableHeader.module.scss';

export const renderTableHeader = (): HTMLElement => {
  const tableHeader: HTMLElement = createElem('div', styles['winners-table__top-row']);

  const numberCont: HTMLElement = createElem('div', 'winners-table__column-wrap');
  const number: HTMLElement = createElem('p', 'winners-table__column-name');
  number.innerHTML = 'Number';
  numberCont.append(number);

  const carCont: HTMLElement = createElem('div', 'winners-table__column-wrap');
  const car: HTMLElement = createElem('p', 'winners-table__column-name');
  car.innerHTML = 'Car';
  carCont.append(car);

  const nameCont: HTMLElement = createElem('div', 'winners-table__column-wrap');
  const name: HTMLElement = createElem('p', 'winners-table__column-name');
  name.innerHTML = 'Name';
  nameCont.append(name);

  const arrow = winnersState.order === 'DESC' ? '↑' : '↓';

  const winsCont: HTMLElement = createElem('div', 'winners-table__column-wrap');
  const wins: HTMLElement = createElem('p', 'winners-table__column-name');
  wins.classList.add('winners-table__column-name_clickable');
  wins.id = 'wins';
  wins.innerHTML = `Wins ${winnersState.sort === 'wins' ? arrow : ''}`;
  winsCont.append(wins);

  wins.onclick = sortingHandler;

  const bestTimeCont: HTMLElement = createElem('div', 'winners-table__column-wrap');
  const bestTime: HTMLElement = createElem('p', 'winners-table__column-name');
  bestTime.classList.add('winners-table__column-name_clickable');
  bestTime.id = 'time';
  bestTime.innerHTML = `Best time (sec) ${winnersState.sort === 'time' ? arrow : ''}`;
  bestTimeCont.append(bestTime);

  bestTime.onclick = sortingHandler;
  tableHeader.append(numberCont, carCont, nameCont, winsCont, bestTimeCont);

  return tableHeader;
};
