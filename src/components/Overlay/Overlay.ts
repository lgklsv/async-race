import { garageState } from '../../const/store';
import { createElem } from '../../utils/element-render/create-element';
import { toggleBtnType } from '../../utils/UI/toggle-btn-type';
import { toggleSelectView } from '../../utils/UI/toggle-select-view';
import styles from './Overlay.module.scss';

export const renderOverlay = (): HTMLElement => {
  const overlay: HTMLElement = createElem('div', styles['overlay']);

  overlay.onclick = () => {
    const updateForm = document.getElementById('update') as HTMLFormElement;
    if (garageState.updColorPicker) {
      garageState.updColorPicker = false;
      return;
    }
    toggleSelectView(overlay, true);
    toggleBtnType('.button_restart', false);

    updateForm.reset();
  };

  return overlay;
};
