import { restartCar } from '../../../../../../../utils/restart-car';

export const restartHandler = async (e: Event) => {
  const target = e.target as HTMLButtonElement;
  target.classList.add('disabled');
  if (target.id) {
    const id = target.id.split('_')[1];
    restartCar(+id);
  }
};
