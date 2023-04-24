import { setPaginationBtns } from './set-paginaton-btns';

export const togglePaginationBtns = (
  enable: boolean,
  prev: string,
  next: string,
  page: number,
  limit: number,
  total: number
) => {
  const prevBtn = document.getElementById(prev) as HTMLElement;
  const nextBtn = document.getElementById(next) as HTMLElement;

  if (enable) {
    setPaginationBtns(prevBtn, nextBtn, page, limit, total);
  } else {
    prevBtn.classList.add('disabled');
    nextBtn.classList.add('disabled');
  }
};
