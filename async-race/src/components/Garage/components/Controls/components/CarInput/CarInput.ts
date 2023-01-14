import { createElem } from '../../../../../../utils/create-element';
import { createInput } from '../../../../../../utils/create-input-element';
import { renderButton } from '../../../../../Button/Button';
import styles from './CarInput.module.scss';

export const renderCarInput = (buttonText: string): HTMLElement => {
  const inputsContainer: HTMLElement = createElem('div', styles['controls__change']);

  const createCarInput: HTMLInputElement = createInput('text', 'controls__input');
  createCarInput.placeholder = 'Enter car name:';

  const pickColorInput: HTMLInputElement =  createInput('color', 'controls__pick-color');

  const button: HTMLElement = renderButton(buttonText);
  
  inputsContainer.append(createCarInput, pickColorInput, button);

  return inputsContainer;
};
