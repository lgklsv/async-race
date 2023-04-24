import { createElem } from '../../../../utils/element-render/create-element';
import { winnersState } from '../../../../const/store';
import styles from './WinnersTable.module.scss';
import { renderTableHeader } from './components/TableHeader/TableHeader';
import { carImage } from '../../../../assets/images/car';

export const renderWinnersTable = (): HTMLElement => {
  const winnersTable: HTMLElement = createElem('div', styles['winners-table']);

  const topTableRow: HTMLElement = renderTableHeader();

  const tableBody: HTMLElement = createElem('div', 'winners-table__body');
  for (let i = 0; i < winnersState.winners.length; i++) {
    const row: HTMLElement = createElem('div', 'winners-table__row');
    const number: HTMLElement = createElem('p', 'winners-table__number');
    number.innerHTML = ((winnersState.page - 1) * winnersState.limit + (i + 1)).toString();
    number.classList.add('column-item');

    const car: HTMLElement = createElem('p', 'winners-table__car');
    car.innerHTML = carImage(winnersState.winners[i].color);

    const name: HTMLElement = createElem('p', 'winners-table__name');
    name.classList.add('column-item');
    name.innerHTML = winnersState.winners[i].name;

    const wins: HTMLElement = createElem('p', 'winners-table__wins');
    wins.classList.add('column-item');
    wins.innerHTML = winnersState.winners[i].wins.toString();

    const bestTime: HTMLElement = createElem('p', 'winners-table__time');
    bestTime.classList.add('column-item');
    bestTime.innerHTML = winnersState.winners[i].time.toString();

    row.append(number, car, name, wins, bestTime);
    tableBody.append(row);
  }

  winnersTable.append(topTableRow, tableBody);
  return winnersTable;
};
