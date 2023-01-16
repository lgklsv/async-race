import { createElem } from '../../utils/create-element';
import styles from './Button.module.scss';

export const renderButton = (
  text: string,
  type: string,
  modifier?: string[]
): HTMLButtonElement => {
  const button = createElem('button', styles['button']) as HTMLButtonElement;
  if (modifier) {
    modifier.forEach((el) => {
      button.classList.add(`button_${el}`);
    });
  }
  button.innerHTML = text;
  if (type) button.type = type;

  return button;
};
