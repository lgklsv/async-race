import { garageState } from '../const/store';

export const findCarById = (id: number): Car | undefined =>
  garageState.cars.find((el) => el.id === id);
