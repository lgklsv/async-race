import { createElem } from '../../utils/element-render/create-element';
import { toGarageView } from './components/HeaderHandlers/toGarageView';
import { toWinnersView } from './components/HeaderHandlers/toWinnersView';
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

  toGarageBtn.onclick = toGarageView;

  const toWinnersBtn: HTMLElement = createElem('li', 'header__nav-btn');
  toWinnersBtn.innerHTML = 'winners';
  toWinnersBtn.id = 'to-winners';

  toWinnersBtn.onclick = toWinnersView;

  headerNav.append(toGarageBtn, toWinnersBtn);
  headerContainer.append(headerLogo, headerNav);
  header.append(headerContainer);

  return header;
};
