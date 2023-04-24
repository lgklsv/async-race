import { generateRandomCarName } from './generate-random-car-name';
import { generateRandomColor } from './generate-random-color';
import { RANDOM_CARS_AMOUNT } from '../const/defaults';

export const generateRandomCars = (number = RANDOM_CARS_AMOUNT): NewCar[] =>
  new Array(number).fill(0).map(() => ({
    name: generateRandomCarName(),
    color: generateRandomColor(),
  }));
