import { createElem } from '../../utils/create-element';
import styles from './Header.module.scss';

export const renderHeader = (): HTMLElement => {
  const header: HTMLElement = createElem('header', styles['header']);

  const headerContainer: HTMLElement = createElem('div', 'header__container');
  const headerLogo: HTMLElement = createElem('div', 'header__logo');
  const headerNav: HTMLElement = createElem('ul', 'header__nav');

  const toGarageBtn: HTMLElement = createElem('li', 'header__nav-btn');
  toGarageBtn.innerHTML = 'garage';
  const toWinnersBtn: HTMLElement = createElem('li', 'header__nav-btn');
  toWinnersBtn.innerHTML = 'winners';

  headerNav.append(toGarageBtn, toWinnersBtn);
  headerContainer.append(headerLogo, headerNav);
  header.append(headerContainer);

  return header;
};
