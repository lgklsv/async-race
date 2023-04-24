import { capitalize } from '../../utils/capitalize';
import { createElem } from '../../utils/element-render/create-element';
import { renderButton } from '../Button/Button';
import { resetAllHandler } from '../Garage/components/Controls/components/CarControlBtns/ControlHandlers/ResetAllHandler';
import styles from './WinnerMessage.module.scss';

export const renderWinnerMessage = (winner: RaceWinner): HTMLElement => {
  const winnerMes: HTMLElement = createElem('div', styles['winner-message']);

  const winnersMesContainer: HTMLElement = createElem('div', 'winner-message__container');

  const message: HTMLElement = createElem('h2', 'winner-message__car');
  message.innerHTML = `${capitalize(winner.winner.name)} wins in (${winner.winnerTime}s) ⏱️`;

  const resetBtn: HTMLElement = renderButton('reset', '', ['close-message']);
  resetBtn.onclick = resetAllHandler;

  winnersMesContainer.append(message, resetBtn);

  winnerMes.append(winnersMesContainer);
  return winnerMes;
};
