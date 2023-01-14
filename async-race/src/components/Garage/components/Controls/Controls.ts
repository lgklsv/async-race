import { createElem } from '../../../../utils/create-element';
import { renderCarInput } from '../CarInput/CarInput';
import styles from './Controls.module.scss';

export const renderControls = (): HTMLElement => {
  const contolsContainer: HTMLElement = createElem('div', styles['controls']);

  // create car
  const create: HTMLElement = renderCarInput('create');

  // update car
  const update: HTMLElement = renderCarInput('update');

  contolsContainer.append(create, update);
  return contolsContainer;
};
