import { deleteCar } from '../../../../../../../API/delete-car';
import { updateGarageUI } from '../../../../../../../utils/update-garageUI';
import { getWinner } from '../../../../../../../API/get-winner';
import { deleteWinner } from '../../../../../../../API/delete-winner';
import { updateWinnersUI } from '../../../../../../../utils/update-winnersUI';

export const removeHandler = async (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.id) {
    const id = target.id.split('_')[1];
    await deleteCar(+id);

    const winnerExists = await getWinner(+id);
    if (winnerExists !== -1) {
      await deleteWinner(+id);
      await updateWinnersUI();
    }
  }
  await updateGarageUI();
};
