import { createElem } from '../../utils/create-element';
import { renderControls } from './components/Controls/Controls';
import styles from './Garage.module.scss';

export const renderGarage = (): HTMLElement => {
  const main: HTMLElement = createElem('main', styles['main']);
  const mainContainer: HTMLElement = createElem('div', 'main__container');


  const controls: HTMLElement = renderControls();
  mainContainer.append(controls);
  main.append(mainContainer);
  return main;
};
