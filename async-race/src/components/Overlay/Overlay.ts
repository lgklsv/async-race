import { createElem } from '../../utils/create-element';
import { toggleSelectView } from '../../utils/toggle-select-view';
import styles from './Overlay.module.scss';

export const renderOverlay = (): HTMLElement => {
  const overlay: HTMLElement = createElem('div', styles['overlay']);

  overlay.onclick = () => {
    toggleSelectView(overlay);
    const updateForm = document.getElementById('update') as HTMLElement;
    const nameInput = updateForm.querySelector('#name') as HTMLInputElement;
    nameInput.value = '';
    const colorInput = updateForm.querySelector('#color') as HTMLInputElement;
    colorInput.value = '';
  };

  return overlay;
};
