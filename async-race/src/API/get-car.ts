import { GARAGE_URL } from '../const/api-urls';

export const getCar = async (id: number): Promise<Car> =>
  (await fetch(`${GARAGE_URL}/${id}`)).json();
