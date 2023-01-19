import { createElem } from '../../utils/create-element';
import styles from './Winners.module.scss';
import { renderWinnersTableContainer } from './WinnersTableContainer/WinnersTableContainer';

export const renderWinners = (): HTMLElement => {
  const winners: HTMLElement = createElem('div', styles['winners']);

  const winnersContainer: HTMLElement = createElem('div', 'winners__container');
  const winnersSection: HTMLElement = createElem('div', 'winnners-section');
  const winnersTable: HTMLElement = renderWinnersTableContainer();

  winnersSection.append(winnersTable);
  winnersContainer.append(winnersSection);
  winners.append(winnersContainer);

  return winners;
};
