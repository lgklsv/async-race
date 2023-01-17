import { getCars } from '../API/get-cars';

const { items, count } = await getCars(1);

export const garage: Garage = {
  cars: items,
  totalCars: count ? +count : 0,
  page: 1,
  limit: 7,
  updColorPicker: false,
};
