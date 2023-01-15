import { createElem } from '../../utils/create-element';
import styles from './Winners.module.scss';

export const renderWinners = (): HTMLElement => {
  const winners: HTMLElement = createElem('div', styles['winners']);

  const h1: HTMLElement = createElem('h1', 'winners__heading');
  h1.innerHTML = 'WINNERS';

  winners.append(h1);
  return winners;
};
