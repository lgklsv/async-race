export const toGarageView = (e: Event): void => {
  const target = e.target as HTMLElement;
  target.classList.add('header__nav-btn_active');
  const winnersView = document.querySelector('.winners') as HTMLElement;
  winnersView.classList.add('hidden');

  const toWinners = document.getElementById('to-winners') as HTMLElement;
  toWinners.classList.remove('header__nav-btn_active');
};
