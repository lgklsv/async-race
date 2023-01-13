// import { renderFooter } from '../Footer/Footer';
// import { renderHeader } from '../Header/Header';
import { renderGarage } from '../Garage/Garage';
import styles from './App.module.scss';

export const renderApp = (): Element => {
  document.body.classList.add(styles['body']);

  const appContiner: Element = document.querySelector('#app') as Element;
  appContiner.innerHTML = '';

  // const header: HTMLElement = renderHeader();
  // const footer: HTMLElement = renderFooter();
  const main: HTMLElement = renderGarage();
  // appContiner.append(header, main, footer);
  appContiner.append(main);

  return appContiner;
};
