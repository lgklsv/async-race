import { getDistanceBetween } from './get-distance-between';
import { garageState } from '../const/store';
import { animateCar } from './animate-car';
import { driveCar } from '../API/drive-car';
import { brokenCarImage } from '../assets/images/broken-car';

export const raceCar = async (id: number, carParams: EngineParams): Promise<DriveMod> => {
  const race = document.getElementById(id.toString()) as HTMLElement;

  const time = Math.round(carParams.distance / carParams.velocity);
  const carEl = race.querySelector('.race__car') as HTMLElement;
  const flag = race.querySelector('.race__finish') as HTMLElement;
  const distanceHTML = Math.floor(getDistanceBetween(carEl, flag)) + 50;

  garageState.animation[id] = animateCar(carEl, time, distanceHTML);

  const res = await driveCar(+id);
  const { success } = res;
  if (!success) {
    const carData = garageState.cars.find((car) => car.id === id);
    if (carData) {
      carEl.innerHTML = brokenCarImage(carData.color);
    }

    window.cancelAnimationFrame(garageState.animation[id].id);
  }
  return { success, id, time };
};
