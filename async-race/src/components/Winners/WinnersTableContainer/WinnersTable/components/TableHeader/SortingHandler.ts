import { winnersState } from '../../../../../../const/store';
import { updateWinnersUI } from '../../../../../../utils/UI/update-winnersUI';

export const sortingHandler = async (e: Event) => {
  const target = e.target as HTMLElement;
  const { id } = target;
  if (id === 'wins' || id === 'time') {
    if (id === winnersState.sort) {
      winnersState.order = winnersState.order === 'ASC' ? 'DESC' : 'ASC';
    } else {
      winnersState.sort = id;
    }
    updateWinnersUI();
  }
};
