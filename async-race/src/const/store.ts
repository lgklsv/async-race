import { getCars } from '../API/get-cars';

export const garage: Garage = {
  cars: await getCars(1),
  page: 1,
};
