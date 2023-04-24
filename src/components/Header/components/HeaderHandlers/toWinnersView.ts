export const toWinnersView = (e: Event): void => {
  const target = e.target as HTMLElement;
  target.classList.add('header__nav-btn_active');
  const winnersView = document.querySelector('.winners') as HTMLElement;
  winnersView.classList.remove('hidden');

  const toGarage = document.getElementById('to-garage') as HTMLElement;
  toGarage.classList.remove('header__nav-btn_active');
};
