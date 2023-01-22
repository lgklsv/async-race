import { createElem } from '../../../../utils/element-render/create-element';
import { renderCarControlBtns } from './components/CarControlBtns/CarControlBtns';
import { renderCarInput } from './components/CarInput/CarInput';
import { createCarHandler } from './components/CarInput/InputHandlers/CreateCarHandler';
import { updateCarHandler } from './components/CarInput/InputHandlers/UpdateCarHandler';
import { updateColorInputHandler } from '../../../../utils/UI/update-color-input-handler';
import styles from './Controls.module.scss';

export const renderControls = (): HTMLElement => {
  const contolsContainer: HTMLElement = createElem('div', styles['controls']);

  const create: HTMLElement = renderCarInput('create', false);
  create.onsubmit = createCarHandler;

  const update: HTMLElement = renderCarInput('update', true);
  update.onsubmit = updateCarHandler;
  updateColorInputHandler(update);

  const carContros: HTMLElement = renderCarControlBtns();

  contolsContainer.append(create, update, carContros);
  return contolsContainer;
};
