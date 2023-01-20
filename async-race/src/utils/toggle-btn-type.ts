export const toggleBtnType = (type: string, enabled: boolean) => {
  const allBtnsOfType = Array.from(document.querySelectorAll(type));
  allBtnsOfType.forEach((btn) => {
    if (enabled) {
      btn.classList.remove('disabled');
    } else {
      btn.classList.add('disabled');
    }
  });
};
