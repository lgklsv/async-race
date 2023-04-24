import { carBrands, carModels } from '../const/car-names';

export const generateRandomCarName = (): string => {
  const brand = carBrands[Math.floor(Math.random() * carBrands.length)];
  const model = carModels[Math.floor(Math.random() * carModels.length)];
  return `${brand} ${model}`;
};
