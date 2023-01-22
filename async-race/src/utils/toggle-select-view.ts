import { toggleBtnType } from './toggle-btn-type';

export const toggleSelectView = (overlay: HTMLElement, btns: boolean): void => {
  const allRaces = Array.from(document.querySelectorAll('.race'));
  allRaces.forEach((race) => race.classList.remove('race_active'));

  toggleBtnType('.button_control', btns);

  overlay.classList.toggle('active');

  const updateForm = document.getElementById('update') as HTMLElement;
  const formElems = Array.from(updateForm.children);
  formElems.forEach((el) => el.classList.toggle('disabled'));
};
