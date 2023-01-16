import { createCar } from '../../../../../../API/create-car';
import { updateGarageUI } from '../../../../../../utils/update-garageUI';

export const carFormHandler = async (e: Event): Promise<void> => {
  e.preventDefault();

  function carIsCar(car: object): car is NewCar {
    return 'color' in car;
  }

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
