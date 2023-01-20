import { getCar } from '../../../../../../../API/get-car';
import { toggleSelectView } from '../../../../../../../utils/toggle-select-view';

export const selectHandler = async (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.id) {
    const id = target.id.split('_')[1];
    const car: Car = await getCar(+id);
    const updateForm = document.getElementById('update') as HTMLElement;
    updateForm.setAttribute('data-id', id);

    const nameInput = updateForm.querySelector('#name') as HTMLInputElement;
    nameInput.value = car.name;
    nameInput.focus();
    const colorInput = updateForm.querySelector('#color') as HTMLInputElement;
    colorInput.value = car.color;
  }

  // Add overlay
  const overlay = document.querySelector('.overlay') as HTMLElement;
  toggleSelectView(overlay, false);

  // Add active race
  const curRace = target.closest('.race') as HTMLElement;
  curRace.classList.add('race_active');
};
