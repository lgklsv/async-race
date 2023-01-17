import { garage } from '../const/store';

export const updateColorInputHandler = (form: HTMLElement) => {
  const colorInput = form.querySelector('#color') as HTMLInputElement;
  colorInput.addEventListener('focus', () => {
    if (garage.updColorPicker === true) {
      garage.updColorPicker = false;
    } else {
      garage.updColorPicker = true;
    }
  });
};
