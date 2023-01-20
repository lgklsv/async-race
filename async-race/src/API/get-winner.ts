import { WINNERS_URL } from '../const/api-urls';

export const getWinner = async (id: number): Promise<Winner | -1> => {
  const res = await fetch(`${WINNERS_URL}/${id}`);
  return res.status !== 200 ? -1 : res.json();
};
