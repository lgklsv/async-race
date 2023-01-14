import { createElem } from '../../../../utils/create-element';
import { renderCarControlBtns } from './components/CarControlBtns/CarControlBtns';
import { renderCarInput } from './components/CarInput/CarInput';
import styles from './Controls.module.scss';

export const renderControls = (): HTMLElement => {
  const contolsContainer: HTMLElement = createElem('div', styles['controls']);

  // create car
  const create: HTMLElement = renderCarInput('create');

  // update car
  const update: HTMLElement = renderCarInput('update');

  const carContros: HTMLElement = renderCarControlBtns();

  contolsContainer.append(create, update, carContros);
  return contolsContainer;
};
