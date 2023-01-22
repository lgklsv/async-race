import { createElem } from '../../../utils/element-render/create-element';
import styles from './WinnersTableContainer.module.scss';
import { renderWinnersTable } from './WinnersTable/WinnersTable';
import { winnersState } from '../../../const/store';
import { updateWinnersUI } from '../../../utils/UI/update-winnersUI';
import { renderPagination } from '../../Pagination/Pagination';

export const renderWinnersTableContainer = (): HTMLElement => {
  const contolsContainer: HTMLElement = createElem('div', styles['winners__table']);

  const winnersHeading: HTMLElement = createElem('div', 'winners__info');

  const heading: HTMLElement = createElem('h2', 'winners__heading');
  heading.innerHTML = `Winners (${winnersState.total})`;

  const pageNum: HTMLElement = createElem('h3', 'winners__page-num');
  pageNum.innerHTML = `Page #${winnersState.page}`;

  winnersHeading.append(heading, pageNum);

  const winnersTable = renderWinnersTable();

  const paginateBtns: HTMLElement = renderPagination(winnersState, updateWinnersUI, 'winners');

  contolsContainer.append(winnersHeading, winnersTable, paginateBtns);

  return contolsContainer;
};
