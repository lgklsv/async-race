export const toggleAllBtns = (enabled: boolean) => {
  const allControlBtns = Array.from(document.querySelectorAll('.button_control'));
  allControlBtns.forEach((btn) => {
    if (enabled) {
      btn.classList.remove('disabled');
    } else {
      btn.classList.add('disabled');
    }
  });
};
