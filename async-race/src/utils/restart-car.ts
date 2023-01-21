import { garageState } from '../const/store';
import { startStopEngine } from '../API/start-stop-engine';
import { carImage } from '../assets/images/car';

export const restartCar = async (id: number) => {
  const race = document.getElementById(id.toString()) as HTMLElement;

  if (garageState.animation[id]) {
    window.cancelAnimationFrame(garageState.animation[id].id);
    await startStopEngine(+id, 'stopped');
  }

  const carEl = race.querySelector('.race__car') as HTMLElement;
  carEl.style.transform = 'translateX(0px) scaleX(-1)';
  const carData = garageState.cars.find((car) => car.id === id);
  if (carData) {
    carEl.innerHTML = carImage(carData.color);
  }

  const allBtns = Array.from(race.querySelectorAll('button'));
  allBtns.forEach((el) => el.classList.remove('disabled'));
  const restartBtn = document.getElementById(`restart-btn_${id}`) as HTMLElement;
  restartBtn.classList.add('disabled');
};
