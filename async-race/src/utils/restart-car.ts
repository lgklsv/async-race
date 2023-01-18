import { garage } from '../const/store';
import { startStopEngine } from '../API/start-stop-engine';

export const restartCar = async (id: number) => {
  const race = document.getElementById(id.toString()) as HTMLElement;

  if (garage.animation[id]) {
    window.cancelAnimationFrame(garage.animation[id].id);
    await startStopEngine(+id, 'stopped');
  }

  const car = race.querySelector('.race__car') as HTMLElement;
  car.style.transform = 'translateX(0px) scaleX(-1)';
  const allBtns = Array.from(race.querySelectorAll('button'));
  allBtns.forEach((el) => el.classList.remove('disabled'));
};
