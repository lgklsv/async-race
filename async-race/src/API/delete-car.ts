import { GARAGE_URL } from '../const/api-urls';

export const deleteCar = async (id: number): Promise<void> =>
  (await fetch(`${GARAGE_URL}/${id}`, { method: 'DELETE' })).json();
