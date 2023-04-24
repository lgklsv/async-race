import { deleteCar } from '../../../../../../../API/garage/delete-car';
import { updateGarageUI } from '../../../../../../../utils/UI/update-garageUI';
import { getWinner } from '../../../../../../../API/winners/get-winner';
import { deleteWinner } from '../../../../../../../API/winners/delete-winner';
import { updateWinnersUI } from '../../../../../../../utils/UI/update-winnersUI';

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
