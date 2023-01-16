import { createCar } from '../../../../../../API/create-car';
import { getCars } from '../../../../../../API/get-cars';
import { createElem } from '../../../../../../utils/create-element';
import { createInput } from '../../../../../../utils/create-input-element';
import { renderButton } from '../../../../../Button/Button';
import styles from './CarInput.module.scss';

export const renderCarInput = (buttonText: string, disabled: boolean): HTMLElement => {
  const form: HTMLElement = createElem('form', styles['controls__change']);
  form.id = buttonText;

  const createCarInput: HTMLInputElement = createInput('text', 'controls__input');
  if (disabled) createCarInput.classList.add('disabled');
  createCarInput.placeholder = 'Enter car name:';
  createCarInput.id = 'name';

  const pickColorInput: HTMLInputElement = createInput('color', 'controls__pick-color');
  if (disabled) pickColorInput.classList.add('disabled');
  pickColorInput.id = 'color';

  const button: HTMLElement = renderButton(buttonText, 'submit');
  if (disabled) button.classList.add('disabled');

  form.append(createCarInput, pickColorInput, button);

  form.onsubmit = async (e: Event): Promise<void> => {
    e.preventDefault();

    function carIsCar(car: object): car is NewCar {
      return 'color' in car;
    }

    const { target } = e;
    if (target instanceof HTMLFormElement) {
      const formInputs = Array.from(target.elements).slice(0, -1) as HTMLInputElement[];
      const car = formInputs.reduce((obj, input) => ({ ...obj, [input.id]: input.value }), {});
      console.log(car);
      if (carIsCar(car)) {
        await createCar(car);
        console.log(await getCars(1));
        console.log('here');
      }
    }
  };

  return form;
};
