import { getCar } from '../../../../../../../API/get-car';
import { toggleSelectView } from '../../../../../../../utils/toggle-select-view';

export const selectHandler = async (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.id) await getCar(+target.id);

  // Add overlay
  const overlay = document.querySelector('.overlay') as HTMLElement;
  toggleSelectView(overlay);

  // Add active race
  const curRace = target.closest('.race') as HTMLElement;
  curRace.classList.add('race_active');
};
