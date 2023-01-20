import { getWinners } from '../API/get-winners';
import { renderWinnersTableContainer } from '../components/Winners/WinnersTableContainer/WinnersTableContainer';
import { winnersState } from '../const/store';

export const updateWinnersUI = async () => {
  const { winners, num } = await getWinners(winnersState.page, 'wins', 'DESC');

  if (winners.length === 0 && winnersState.page !== 1) {
    winnersState.page--;
    updateWinnersUI();
    return;
  }

  winnersState.winners = winners;
  winnersState.totalWinners = num ? +num : 0;

  const winnersEl = document.querySelector('.winners-section') as HTMLElement;
  winnersEl.innerHTML = '';
  winnersEl.append(renderWinnersTableContainer());

  // const prevBtn = document.getElementById('prev') as HTMLElement;
  // const nextBtn = document.getElementById('next') as HTMLElement;
  // setPaginationBtns(prevBtn, nextBtn);
};
