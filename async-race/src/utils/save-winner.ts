import { createWinner } from '../API/create-winner';
import { getWinner } from '../API/get-winner';
import { updateWinner } from '../API/update-winner';

export const saveWinner = async (winner: RaceWinner) => {
  const winnerExists = await getWinner(winner.winner.id);

  if (winnerExists === -1) {
    const newWinner: Winner = {
      id: winner.winner.id,
      wins: 1,
      time: winner.winnerTime,
    };
    await createWinner(newWinner);
  } else {
    const updatedWinner: UpdateWinner = {
      wins: winnerExists.wins + 1,
      time: winnerExists.time > winner.winnerTime ? winner.winnerTime : winnerExists.time,
    };
    await updateWinner(winner.winner.id, updatedWinner);
  }
};
