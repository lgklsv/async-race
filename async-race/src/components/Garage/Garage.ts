import { createElem } from '../../utils/create-element';
import { renderControls } from './components/Controls/Controls';
import { renderRaceContainer } from './components/RaceContainer/RaceContainer';
import styles from './Garage.module.scss';

export const renderGarage = (): HTMLElement => {
  const main: HTMLElement = createElem('main', styles['main']);
  const mainContainer: HTMLElement = createElem('div', 'main__container');

  const controls: HTMLElement = renderControls();
  const garage: HTMLElement = createElem('div', 'garage-section');
  const raceContainer: HTMLElement = renderRaceContainer();
  garage.append(raceContainer);

  mainContainer.append(controls, garage);
  main.append(mainContainer);
  return main;
};
