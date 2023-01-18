/* eslint-disable no-param-reassign */
export const animateCar = (car: HTMLElement, time: number, distance: number) => {
  let start: number | undefined;
  let previousTimeStamp: number | undefined;
  let done = false;
  const state: AnimationState = { id: 0 };

  function step(timestamp: number) {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;

    if (previousTimeStamp !== timestamp) {
      const count = Math.round(elapsed * (distance / time));
      car.style.transform = `translateX(${count}px) scaleX(-1)`;
      if (count === distance) done = true;
    }

    if (elapsed < time) {
      previousTimeStamp = timestamp;
      if (!done) {
        state.id = window.requestAnimationFrame(step);
      }
    }
  }

  state.id = window.requestAnimationFrame(step);
  return state;
};
