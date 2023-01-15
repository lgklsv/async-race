import { GARAGE_URL } from '../const/api-urls';

export const getCars = async (page: number, limit: number = 7): Promise<Cars[]> => {
  const res = await fetch(`${GARAGE_URL}?_page=${page}&_limit=${limit}`);
  return await res.json();
};
