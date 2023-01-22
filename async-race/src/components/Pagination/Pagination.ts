import { createElem } from '../../utils/create-element';
import { setPaginationBtns } from '../../utils/set-paginaton-btns';
import { renderButton } from '../Button/Button';
import style from './Pagination.module.scss';

/* eslint-disable no-param-reassign */
export const renderPagination = (
  storage: Garage | Winners,
  updateFunc: () => void,
  page: string
): HTMLElement => {
  const paginateBtns: HTMLElement = createElem('div', style['paginate-btns']);
  const prevBtn: HTMLElement = renderButton('prev', '');
  prevBtn.id = `${page}-prev`;

  prevBtn.onclick = () => {
    storage.page--;
    updateFunc();
  };

  const nextBtn: HTMLElement = renderButton('next', '');
  nextBtn.id = `${page}-next`;

  nextBtn.onclick = () => {
    storage.page++;
    updateFunc();
  };

  paginateBtns.append(prevBtn, nextBtn);
  setPaginationBtns(prevBtn, nextBtn, storage.page, storage.limit, storage.total);
  return paginateBtns;
};
