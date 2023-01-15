import { GARAGE_URL } from '../const/api-urls';

export const getCars = async (page: number, limit = 7): Promise<getCars> => {
  const res = await fetch(`${GARAGE_URL}?_page=${page}&_limit=${limit}`);
  return {
    items: await res.json(),
    count: res.headers.get('X-Total-Count'),
  };
};
