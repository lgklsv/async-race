import { startStopEngine } from '../API/start-stop-engine';
import { getDistanceBetween } from './get-distance-between';
import { garageState } from '../const/store';
import { animateCar } from './animate-car';
import { driveCar } from '../API/drive-car';

export const raceCar = async (id: number) => {
  const race = document.getElementById(id.toString()) as HTMLElement;

  const allBtns = Array.from(race.querySelectorAll('button'));
  allBtns.forEach((el) => el.classList.add('disabled'));
  const restartBtn = document.getElementById(`restart-btn_${id}`) as HTMLElement;
  restartBtn.classList.remove('disabled');

  const { velocity, distance } = await startStopEngine(+id, 'started');

  const time = Math.round(distance / velocity);
  const car = race.querySelector('.race__car') as HTMLElement;
  const flag = race.querySelector('.race__finish') as HTMLElement;
  const distanceHTML = Math.floor(getDistanceBetween(car, flag)) + 50;

  garageState.animation[id] = animateCar(car, time, distanceHTML);
  const res = await driveCar(+id);
  if (!res.success) window.cancelAnimationFrame(garageState.animation[id].id);
};
