export const toggleSelectView = (overlay: HTMLElement): void => {
  const allRaces = Array.from(document.querySelectorAll('.race'));
  allRaces.forEach((race) => race.classList.remove('race_active'));

  overlay.classList.toggle('active');

  const updateForm = document.getElementById('update') as HTMLElement;
  const formElems = Array.from(updateForm.children);
  formElems.forEach((el) => el.classList.toggle('disabled'));
};
