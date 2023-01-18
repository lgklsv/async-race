import { driveCar } from '../../../../../../../API/drive-car';
import { startStopEngine } from '../../../../../../../API/start-stop-engine';
import { garage } from '../../../../../../../const/store';
import { animateCar } from '../../../../../../../utils/animate-car';
import { getDistanceBetween } from '../../../../../../../utils/get-distance-between';

export const raceHandler = async (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.id) {
    const id = target.id.split('_')[1];
    const race = target.closest('.race') as HTMLElement;

    const allBtns = Array.from(race.querySelectorAll('button'));
    allBtns.forEach((el) => el.classList.add('disabled'));
    const restartBtn = document.getElementById(`restart-btn_${id}`) as HTMLElement;
    restartBtn.classList.remove('disabled');

    const { velocity, distance } = await startStopEngine(+id, 'started');

    const time = Math.round(distance / velocity);
    const car = race.querySelector('.race__car') as HTMLElement;
    const flag = race.querySelector('.race__finish') as HTMLElement;
    const distanceHTML = Math.floor(getDistanceBetween(car, flag)) + 50;

    garage.animation[id] = animateCar(car, time, distanceHTML);
    const res = await driveCar(+id);
    if (!res.success) window.cancelAnimationFrame(garage.animation[id].id);
  }
};
