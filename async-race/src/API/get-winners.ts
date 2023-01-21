import { WINNERS_URL } from '../const/api-urls';

export const getWinners = async (
  page: number,
  sort: SortTypes,
  order: OrderTypes,
  limit = 10
): Promise<GetWinners> => {
  const res = await fetch(
    `${WINNERS_URL}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
  );
  return {
    winners: await res.json(),
    num: res.headers.get('X-Total-Count'),
  };
};
