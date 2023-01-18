import { raceCar } from '../../../../../../../utils/race-car';

export const raceHandler = async (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.id) {
    const id = target.id.split('_')[1];
    raceCar(+id);
  }
};
