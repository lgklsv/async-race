import { createElem } from '../../utils/create-element';
import styles from './Header.module.scss';

export const renderHeader = (): HTMLElement => {
  const header: HTMLElement = createElem('header', styles['header']);

  const headerContainer: HTMLElement = createElem('div', 'header__container');
  const headerLogo: HTMLElement = createElem('div', 'header__logo');
  const headerNav: HTMLElement = createElem('ul', 'header__nav');

  const toGarageBtn: HTMLElement = createElem('li', 'header__nav-btn');
  toGarageBtn.innerHTML = 'garage';
  toGarageBtn.id = 'to-garage';
  toGarageBtn.classList.add('header__nav-btn_active');

  toGarageBtn.onclick = (e: Event): void => {
    // TODO refactor
    const target = e.target as HTMLElement;
    target.classList.add('header__nav-btn_active');
    const winnersView = document.querySelector('.winners') as HTMLElement;
    winnersView.classList.add('hidden');

    const toWinners = document.getElementById('to-winners') as HTMLElement;
    toWinners.classList.remove('header__nav-btn_active');
  };
  const toWinnersBtn: HTMLElement = createElem('li', 'header__nav-btn');
  toWinnersBtn.innerHTML = 'winners';
  toWinnersBtn.id = 'to-winners';

  toWinnersBtn.onclick = (e: Event): void => {
    // TODO refactor
    const target = e.target as HTMLElement;
    target.classList.add('header__nav-btn_active');
    const winnersView = document.querySelector('.winners') as HTMLElement;
    winnersView.classList.remove('hidden');

    const toGarage = document.getElementById('to-garage') as HTMLElement;
    toGarage.classList.remove('header__nav-btn_active');
  };

  headerNav.append(toGarageBtn, toWinnersBtn);
  headerContainer.append(headerLogo, headerNav);
  header.append(headerContainer);

  return header;
};
