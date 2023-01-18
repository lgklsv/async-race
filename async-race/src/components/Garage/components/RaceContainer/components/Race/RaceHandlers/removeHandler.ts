import { deleteCar } from '../../../../../../../API/delete-car';
import { updateGarageUI } from '../../../../../../../utils/update-garageUI';

export const removeHandler = async (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.id) {
    const id = target.id.split('_')[1];
    await deleteCar(+id);
  }
  await updateGarageUI();
};
