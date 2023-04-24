import { garageState } from '../../const/store';

export const updateColorInputHandler = (form: HTMLElement) => {
  const colorInput = form.querySelector('#color') as HTMLInputElement;
  colorInput.addEventListener('focus', () => {
    if (garageState.updColorPicker === true) {
      garageState.updColorPicker = false;
    } else {
      garageState.updColorPicker = true;
    }
  });
};
