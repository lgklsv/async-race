import { createElem } from '../../../../utils/create-element';
import { createInput } from '../../../../utils/create-input-element';
import styles from './CarInput.module.scss';

export const renderCarInput = (): HTMLElement => {
  const inputsContainer: HTMLElement = createElem('div', styles['controls__change']);

  const createCarInput: HTMLInputElement = createInput('text', 'controls__input');
  createCarInput.placeholder = 'Enter car name:';

  const pickColorInput: HTMLInputElement =  createInput('color', 'controls__pick-color');
  
  inputsContainer.append(createCarInput, pickColorInput);

  return inputsContainer;
};
