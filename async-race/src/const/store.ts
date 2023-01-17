import { getCars } from '../API/get-cars';

const { items, count } = await getCars(1);

export const garage: Garage = {
  cars: items,
  totalCars: count,
  page: 1,
  updColorPicker: false,
};
