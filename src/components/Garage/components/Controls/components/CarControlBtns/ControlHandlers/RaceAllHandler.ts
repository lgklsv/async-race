import { toggleInterfaceBtns } from '../../../../../../../utils/UI/toggle-interface-btns';
import { garageState } from '../../../../../../../const/store';
import { startStopEngine } from '../../../../../../../API/engine/start-stop-engine';
import { raceAll } from '../../../../../../../utils/race/race-all';
import { raceCar } from '../../../../../../../utils/race/race-car';
import { saveWinner } from '../../../../../../../utils/race/save-winner';
import { updateWinnersUI } from '../../../../../../../utils/UI/update-winnersUI';
import { togglePaginationBtns } from '../../../../../../../utils/UI/toggle-pagination-btns';
import { renderWinnerMessage } from '../../../../../../WinnerMessage/WinnerMessage';
import { toggleBtnType } from '../../../../../../../utils/UI/toggle-btn-type';

export const raceAllHandler = async (e: Event) => {
  const target = e.target as HTMLElement;
  target.classList.add('disabled');

  toggleBtnType('.button_control', false);
  toggleInterfaceBtns(false);
  togglePaginationBtns(
    false,
    'garage-prev',
    'garage-next',
    garageState.page,
    garageState.limit,
    garageState.total
  );

  garageState.breakCars = true;

  const data = await Promise.all(garageState.cars.map((car) => startStopEngine(car.id, 'started')));

  const { cars } = garageState;
  const promises = cars.map((car, idx) => raceCar(car.id, data[idx]));
  const winner = await raceAll(promises, cars);

  const root = document.getElementById('app') as HTMLElement;
  const winnerMes = renderWinnerMessage(winner) as HTMLElement;
  root.append(winnerMes);
  const header = document.querySelector('.header__nav') as HTMLElement;
  header.classList.add('disabled');

  await saveWinner(winner);
  await updateWinnersUI();
};
