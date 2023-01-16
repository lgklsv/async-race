import { renderGarage } from '../Garage/Garage';
import { renderHeader } from '../Header/Header';
import { renderFooter } from '../Footer/Footer';
import styles from './App.module.scss';
import { renderWinners } from '../Winners/Winners';

export const renderApp = (): Element => {
  document.body.classList.add(styles['body']);

  const appContiner: Element = document.querySelector('#app') as Element;
  appContiner.innerHTML = '';

  const header: HTMLElement = renderHeader();
  const main: HTMLElement = renderGarage();
  const footer: HTMLElement = renderFooter();

  const winners: HTMLElement = renderWinners();
  winners.classList.add('hidden');

  appContiner.append(header, main, footer, winners);

  return appContiner;
};
