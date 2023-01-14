import { createElem } from '../../../../utils/create-element';
import { renderCarInput } from '../CarInput/CarInput';
import styles from './Controls.module.scss';

export const renderControls = (): HTMLElement => {
  const contolsContainer: HTMLElement = createElem('div', styles['controls']);

  // create car
  const create: HTMLElement = renderCarInput();

  // update car
  const update: HTMLElement = renderCarInput();

  contolsContainer.append(create, update);
  return contolsContainer;
};
