import { WINNERS_URL } from '../../const/api-urls';

export const deleteWinner = async (id: number) =>
  (await fetch(`${WINNERS_URL}/${id}`, { method: 'DELETE' })).json();
