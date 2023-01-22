import { createElem } from '../../../utils/create-element';
import { renderButton } from '../../Button/Button';
import { setPaginationBtns } from '../../../utils/set-paginaton-btns';
import styles from './WinnersTableContainer.module.scss';
import { renderWinnersTable } from './WinnersTable/WinnersTable';
import { winnersState } from '../../../const/store';
import { updateWinnersUI } from '../../../utils/update-winnersUI';

export const renderWinnersTableContainer = (): HTMLElement => {
  const contolsContainer: HTMLElement = createElem('div', styles['winners__table']);

  const winnersHeading: HTMLElement = createElem('div', 'winners__info');

  const heading: HTMLElement = createElem('h2', 'winners__heading');
  heading.innerHTML = `Winners (${winnersState.totalWinners})`;

  const pageNum: HTMLElement = createElem('h3', 'winners__page-num');
  pageNum.innerHTML = `Page #${winnersState.page}`;

  winnersHeading.append(heading, pageNum);

  // Render winners table
  const winnersTable = renderWinnersTable();

  const paginateBtns: HTMLElement = createElem('div', 'paginate-btns');
  const prevBtn: HTMLElement = renderButton('prev', '');
  prevBtn.id = 'winners-prev';

  prevBtn.onclick = (): void => {
    winnersState.page--;
    updateWinnersUI();
  };

  const nextBtn: HTMLElement = renderButton('next', '');
  nextBtn.id = 'winners-next';

  nextBtn.onclick = (): void => {
    winnersState.page++;
    updateWinnersUI();
  };

  paginateBtns.append(prevBtn, nextBtn);

  setPaginationBtns(
    prevBtn,
    nextBtn,
    winnersState.page,
    winnersState.limit,
    winnersState.totalWinners
  );

  contolsContainer.append(winnersHeading, winnersTable, paginateBtns);

  return contolsContainer;
};
