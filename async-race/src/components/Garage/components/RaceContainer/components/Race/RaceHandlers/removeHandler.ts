import { deleteCar } from '../../../../../../../API/delete-car';
import { updateGarageUI } from '../../../../../../../utils/update-garageUI';

export const removeHandler = async (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.id) await deleteCar(+target.id);
  await updateGarageUI();
};
