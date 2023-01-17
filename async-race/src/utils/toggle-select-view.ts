export const toggleSelectView = (overlay: HTMLElement): void => {
  const allRaces = Array.from(document.querySelectorAll('.race'));
  allRaces.forEach((race) => race.classList.remove('race_active'));

  const allControlBtns = Array.from(document.querySelectorAll('.button_select'));
  allControlBtns.forEach((btn) => btn.classList.toggle('disabled'));

  overlay.classList.toggle('active');

  const updateForm = document.getElementById('update') as HTMLElement;
  const formElems = Array.from(updateForm.children);
  formElems.forEach((el) => el.classList.toggle('disabled'));
};
