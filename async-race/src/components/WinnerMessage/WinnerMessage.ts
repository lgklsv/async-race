import { createElem } from '../../utils/create-element';
import { renderButton } from '../Button/Button';
import { resetAllHandler } from '../Garage/components/Controls/components/CarControlBtns/ControlHandlers/ResetAllHandler';
import styles from './WinnerMessage.module.scss';

export const renderWinnerMessage = (winner: RaceWinner): HTMLElement => {
  const winnerMes: HTMLElement = createElem('div', styles['winner-message']);

  const message: HTMLElement = createElem('h2', 'winner-message__car');
  message.innerHTML = `${winner.winner.name} wins in (${winner.winnerTime}s) ⏱️`;

  const resetBtn: HTMLElement = renderButton('reset', '', ['close-message']);
  resetBtn.onclick = resetAllHandler;

  winnerMes.append(message, resetBtn);
  return winnerMes;
};
