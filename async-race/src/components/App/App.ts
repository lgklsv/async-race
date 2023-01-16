import { renderGarage } from '../Garage/Garage';
import { renderHeader } from '../Header/Header';
import { renderFooter } from '../Footer/Footer';
import styles from './App.module.scss';
import { renderWinners } from '../Winners/Winners';
import { createElem } from '../../utils/create-element';

export const renderApp = (): Element => {
  document.body.classList.add(styles['body']);

  const appContiner: Element = document.querySelector('#app') as Element;
  appContiner.innerHTML = '';

  const header: HTMLElement = renderHeader();
  const main: HTMLElement = renderGarage();
  const footer: HTMLElement = renderFooter();

  const winners: HTMLElement = renderWinners();
  winners.classList.add('hidden');

  const overlay: HTMLElement = createElem('div', 'overlay');

  overlay.onclick = () => {
    // TODO refactor code
    // Remove active race
    const allRaces = Array.from(document.querySelectorAll('.race'));
    allRaces.forEach((race) => race.classList.remove('race_active'));

    // Remove overlay
    overlay.classList.remove('active');

    // Disable form
    const updateForm = document.getElementById('update') as HTMLElement;
    const formElems = Array.from(updateForm.children);
    formElems.forEach((el) => el.classList.add('disabled'));
  };

  appContiner.append(header, main, footer, winners, overlay);

  return appContiner;
};
