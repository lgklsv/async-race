import { WINNERS_URL } from '../const/api-urls';

export const getWinners = async (page: number, limit = 4): Promise<GetWinners> => {
  const res = await fetch(`${WINNERS_URL}?_page=${page}&_limit=${limit}`);
  return {
    winners: await res.json(),
    num: res.headers.get('X-Total-Count'),
  };
};
