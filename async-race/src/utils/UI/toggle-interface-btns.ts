export const toggleInterfaceBtns = (enable: boolean) => {
  const generateCarsBtn = document.querySelector('.button_generate-cars') as HTMLElement;
  const createForm = document.getElementById('create') as HTMLElement;
  if (enable) {
    generateCarsBtn.classList.remove('disabled');

    Array.from(createForm.children).forEach((el) => {
      el.classList.remove('disabled');
    });
  } else {
    generateCarsBtn.classList.add('disabled');

    Array.from(createForm.children).forEach((el) => {
      el.classList.add('disabled');
    });
  }
};
