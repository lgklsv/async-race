import { createElem } from "../../utils/create-element"
import styles from './Button.module.scss';

export const renderButton = (text: string, modifier?: string): HTMLElement => {
  const button: HTMLElement = createElem('button', styles['button']);
  if(modifier) button.classList.add(`button_${modifier}`);
  button.innerHTML = text;

  return button;
}

