import { createElem } from "../../utils/create-element"
import styles from './Button.module.scss';

export const renderButton = (text: string): HTMLElement => {
  const button: HTMLElement = createElem('button', styles['button']);
  button.innerHTML = text;

  return button;
}

