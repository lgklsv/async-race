import { createCar } from '../../../../../../../API/garage/create-car';
import { updateGarageUI } from '../../../../../../../utils/UI/update-garageUI';
import { carIsCar } from '../../../../../../../utils/car-is-car';

export const createCarHandler = async (e: Event) => {
  e.preventDefault();

  const form = e.target;
  if (form instanceof HTMLFormElement) {
    const formInputs = Array.from(form.elements).slice(0, -1) as HTMLInputElement[];
    const car = formInputs.reduce((obj, input) => ({ ...obj, [input.id]: input.value }), {});

    form.reset();
    if (carIsCar(car)) {
      await createCar(car);
      await updateGarageUI();
    }
  }
};
