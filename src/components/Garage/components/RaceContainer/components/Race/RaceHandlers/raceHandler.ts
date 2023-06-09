import { raceCar } from '../../../../../../../utils/race/race-car';
import { startStopEngine } from '../../../../../../../API/engine/start-stop-engine';
import { toggleInterfaceBtns } from '../../../../../../../utils/UI/toggle-interface-btns';
import { garageState } from '../../../../../../../const/store';

export const raceHandler = async (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.id) {
    const id = target.id.split('_')[1];
    const race = document.getElementById(id.toString()) as HTMLElement;
    garageState.breakCars = true;
    // Disable btns on current race
    const allBtns = Array.from(race.querySelectorAll('button'));
    allBtns.forEach((el) => el.classList.add('disabled'));

    // Disable interface
    toggleInterfaceBtns(false);

    const raceAllBtn = document.getElementById('race-all') as HTMLElement;
    raceAllBtn.classList.add('disabled');

    const restartBtn = document.getElementById(`restart-btn_${id}`) as HTMLElement;
    restartBtn.classList.remove('disabled');

    const data = await startStopEngine(+id, 'started');
    raceCar(+id, data);
  }
};
