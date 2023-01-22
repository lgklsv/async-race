import { getCar } from '../API/get-car';
import { getCars } from '../API/get-cars';
import { getWinners } from '../API/get-winners';
import {
  DEFAULT_ID,
  DEFAULT_ORDER,
  DEFAULT_PAGE,
  DEFAULT_SORT,
  GARAGE_PAGE_LIMIT,
  WINNERS_PAGE_LIMIT,
} from './defaults';

const { items, count } = await getCars(DEFAULT_ID);
const { winners, num } = await getWinners(DEFAULT_ID, DEFAULT_SORT, DEFAULT_ORDER);

const winnersCars = await Promise.all(winners.map((winner) => getCar(winner.id)));
const winnersData = winnersCars.map((el, index) => Object.assign(el, winners[index]));

export const garageState: Garage = {
  cars: items,
  totalCars: count ? +count : 0,
  page: DEFAULT_PAGE,
  limit: GARAGE_PAGE_LIMIT,
  updColorPicker: false,
  animation: {},
  cancelObj: null,
  breakCars: false,
};

export const winnersState: Winners = {
  winners: winnersData,
  totalWinners: num ? +num : 0,
  page: DEFAULT_PAGE,
  limit: WINNERS_PAGE_LIMIT,
  sort: DEFAULT_SORT,
  order: DEFAULT_ORDER,
};
