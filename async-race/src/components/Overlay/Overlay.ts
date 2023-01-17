import { garage } from '../../const/store';
import { createElem } from '../../utils/create-element';
import { toggleSelectView } from '../../utils/toggle-select-view';
import styles from './Overlay.module.scss';

export const renderOverlay = (): HTMLElement => {
  const overlay: HTMLElement = createElem('div', styles['overlay']);

  overlay.onclick = () => {
    const updateForm = document.getElementById('update') as HTMLElement;
    const nameInput = updateForm.querySelector('#name') as HTMLInputElement;
    const colorInput = updateForm.querySelector('#color') as HTMLInputElement;
    if (garage.updColorPicker) {
      garage.updColorPicker = false;
      return;
    }
    toggleSelectView(overlay);

    nameInput.value = '';
    colorInput.value = '';
  };

  return overlay;
};
