import { createElem } from '../../../../../../../utils/create-element';
import styles from './Fire.module.scss';

export const renderFire = () => {
  const fire: HTMLElement = createElem('div', styles['fire']);
  for (let i = 0; i < 50; i++) {
    const particle: HTMLElement = createElem('div', 'particle');
    fire.append(particle);
  }
  return fire;
};
