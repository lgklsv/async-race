import { createElem } from '../../../utils/create-element';
import { renderButton } from '../../Button/Button';
import { setPaginationBtns } from '../../../utils/set-paginaton-btns';
import styles from './WinnersTableContainer.module.scss';
import { renderWinnersTable } from './WinnersTable/WinnersTable';

export const renderWinnersTableContainer = (): HTMLElement => {
  const contolsContainer: HTMLElement = createElem('div', styles['winners__table']);

  const winnersHeading: HTMLElement = createElem('div', 'winners__info');

  const heading: HTMLElement = createElem('h2', 'winners__heading');
  heading.innerHTML = `Winners (${4})`;

  const pageNum: HTMLElement = createElem('h3', 'winners__page-num');
  pageNum.innerHTML = `Page #${1}`;

  winnersHeading.append(heading, pageNum);

  // Render winners table
  const winnersTable = renderWinnersTable();

  const paginateBtns: HTMLElement = createElem('div', 'garage__paginate-btns');
  const prevBtn: HTMLElement = renderButton('prev', '');
  prevBtn.id = 'prev';

  // prevBtn.onclick = () => {
  //   winners.page--;
  //   updatewinnersUI();
  // };

  const nextBtn: HTMLElement = renderButton('next', '');
  nextBtn.id = 'next';

  // nextBtn.onclick = () => {
  //   winners.page++;
  //   updatewinnersUI();
  // };

  paginateBtns.append(prevBtn, nextBtn);

  // TODO make this method generic
  setPaginationBtns(prevBtn, nextBtn);

  contolsContainer.append(winnersHeading, winnersTable, paginateBtns);

  return contolsContainer;
};
