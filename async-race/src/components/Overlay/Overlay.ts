import { createElem } from '../../utils/create-element';
import { toggleSelectView } from '../../utils/toggle-select-view';
import styles from './Overlay.module.scss';

export const renderOverlay = (): HTMLElement => {
  const overlay: HTMLElement = createElem('div', styles['overlay']);

  overlay.onclick = () => toggleSelectView(overlay);

  return overlay;
};
