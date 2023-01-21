import { getCar } from '../API/get-car';
import { getWinners } from '../API/get-winners';
import { renderWinnersTableContainer } from '../components/Winners/WinnersTableContainer/WinnersTableContainer';
import { winnersState } from '../const/store';
import { setPaginationBtns } from './set-paginaton-btns';

export const updateWinnersUI = async () => {
  const { winners, num } = await getWinners(
    winnersState.page,
    winnersState.sort,
    winnersState.order
  );

  if (winners.length === 0 && winnersState.page !== 1) {
    winnersState.page--;
    updateWinnersUI();
    return;
  }

  const winnersCars = await Promise.all(winners.map((winner) => getCar(winner.id)));
  const winnersData = winnersCars.map((el, index) => Object.assign(el, winners[index]));

  winnersState.winners = winnersData;
  winnersState.totalWinners = num ? +num : 0;

  const winnersEl = document.querySelector('.winners-section') as HTMLElement;
  winnersEl.innerHTML = '';
  winnersEl.append(renderWinnersTableContainer());

  const prevBtn = document.getElementById('winners-prev') as HTMLElement;
  const nextBtn = document.getElementById('winners-next') as HTMLElement;
  setPaginationBtns(
    prevBtn,
    nextBtn,
    winnersState.page,
    winnersState.limit,
    winnersState.totalWinners
  );
};
