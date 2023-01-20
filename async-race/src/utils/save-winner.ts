import { createWinner } from '../API/create-winner';
import { getWinner } from '../API/get-winner';

export const saveWinner = async (winner: RaceWinner) => {
  const winnerExists = await getWinner(winner.winner.id);

  if (winnerExists === -1) {
    const newWinner: Winner = {
      id: winner.winner.id,
      wins: 1,
      time: winner.winnerTime,
    };
    createWinner(newWinner);
  }
};
