import { WINNERS_URL } from '../../const/api-urls';

export const updateWinner = async (id: number, body: UpdateWinner) => {
  (
    await fetch(`${WINNERS_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  ).json();
};
