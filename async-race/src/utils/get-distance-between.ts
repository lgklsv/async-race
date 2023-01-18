import { getPositionAtCenter } from './get-position-at-center';

export const getDistanceBetween = (a: HTMLElement, b: HTMLElement) => {
  const aPosition = getPositionAtCenter(a);
  const bPosition = getPositionAtCenter(b);

  return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
};
