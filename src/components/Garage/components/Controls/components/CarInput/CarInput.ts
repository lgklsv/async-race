import { createElem } from '../../../../../../utils/element-render/create-element';
import { createInput } from '../../../../../../utils/element-render/create-input-element';
import { renderButton } from '../../../../../Button/Button';
import styles from './CarInput.module.scss';

export const renderCarInput = (buttonText: string, disabled: boolean): HTMLElement => {
  const form: HTMLElement = createElem('form', styles['controls__change']);
  form.id = buttonText;

  const createCarInput: HTMLInputElement = createInput('text', 'controls__input');
  if (disabled) createCarInput.classList.add('disabled');
  createCarInput.placeholder = 'Enter car name:';
  createCarInput.id = 'name';

  const pickColorInput: HTMLInputElement = createInput('color', 'controls__pick-color');
  if (disabled) pickColorInput.classList.add('disabled');
  pickColorInput.id = 'color';

  const button: HTMLElement = renderButton(buttonText, 'submit');
  if (disabled) button.classList.add('disabled');

  form.append(createCarInput, pickColorInput, button);

  return form;
};
