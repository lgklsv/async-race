import { updateCar } from '../../../../../../../API/update-car';
import { toggleSelectView } from '../../../../../../../utils/toggle-select-view';
import { updateGarageUI } from '../../../../../../../utils/update-garageUI';
import { carIsCar } from '../../../../../../../utils/car-is-car';
import { toggleBtnType } from '../../../../../../../utils/toggle-btn-type';
import { updateWinnersUI } from '../../../../../../../utils/update-winnersUI';

export const updateCarHandler = async (e: Event) => {
  e.preventDefault();

  const form = e.target;
  if (form instanceof HTMLFormElement) {
    const formInputs = Array.from(form.elements).slice(0, -1) as HTMLInputElement[];
    const car = formInputs.reduce((obj, input) => ({ ...obj, [input.id]: input.value }), {});

    const updateForm = document.getElementById('update') as HTMLElement;
    const { id } = updateForm.dataset;

    form.reset();
    if (carIsCar(car) && id) {
      const overlay = document.querySelector('.overlay') as HTMLElement;
      toggleSelectView(overlay, true);
      toggleBtnType('.button_restart', false);
      await updateCar(+id, car);
      await updateGarageUI();
      await updateWinnersUI();
    }
  }
};
