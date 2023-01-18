import { generateRandomCarName } from './generate-random-car-name';
import { generateRandomColor } from './generate-random-color';

export const generateRandomCars = (number = 100): NewCar[] =>
  new Array(number).fill(0).map(() => ({
    name: generateRandomCarName(),
    color: generateRandomColor(),
  }));
