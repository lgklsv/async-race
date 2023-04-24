import { WINNERS_URL } from '../../const/api-urls';

export const createWinner = async (body: Winner) => {
  await fetch(`${WINNERS_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
};
