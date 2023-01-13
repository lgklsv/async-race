import { createElem } from '../../utils/create-element';
import styles from './Garage.module.scss';

export const renderGarage = (): HTMLElement => {
  const main: HTMLElement = createElem('main', styles['main']);
  const mainContainer: HTMLElement = createElem('div', 'main__container');

  const h1 = createElem('h1', 'heading');
  h1.innerHTML = 'GARAGE';
  mainContainer.append(h1);

  main.append(mainContainer);
  return main;
};
