import { driveCar } from '../../../../../../../API/drive-car';
import { startStopEngine } from '../../../../../../../API/start-stop-engine';
import { animateCar } from '../../../../../../../utils/animate-car';
import { getDistanceBetween } from '../../../../../../../utils/get-distance-between';

export const raceHandler = async (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.id) {
    const { velocity, distance } = await startStopEngine(+target.id, 'started');
    const time = Math.round(distance / velocity);
    const race = target.closest('.race') as HTMLElement;
    const car = race.querySelector('.race__car') as HTMLElement;
    const flag = race.querySelector('.race__finish') as HTMLElement;
    const distanceHTML = Math.floor(getDistanceBetween(car, flag)) + 50;
    animateCar(car, time, distanceHTML);
    await driveCar(+target.id);
  }
};