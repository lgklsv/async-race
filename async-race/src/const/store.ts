import { getCar } from '../API/get-car';
import { getCars } from '../API/get-cars';
import { getWinners } from '../API/get-winners';

const { items, count } = await getCars(1);
const { winners, num } = await getWinners(1, 'wins', 'DESC');

const winnersCars = await Promise.all(winners.map((winner) => getCar(winner.id)));
const winnersData = winnersCars.map((el, index) => Object.assign(el, winners[index]));

export const garageState: Garage = {
  cars: items,
  totalCars: count ? +count : 0,
  page: 1,
  limit: 7,
  updColorPicker: false,
  animation: {},
};

export const winnersState: Winners = {
  winners: winnersData,
  totalWinners: num ? +num : 0,
  page: 1,
  limit: 10,
};
