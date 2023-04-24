import { createElem } from './create-element';

export const createLink = (
  link: string,
  className: string,
  targetBlank: boolean,
  text: string
): HTMLElement => {
  const createdElement: HTMLElement = createElem('a', className);

  createdElement.setAttribute('href', link);
  if (targetBlank) createdElement.setAttribute('target', '_blank');
  createdElement.innerHTML = text;

  return createdElement;
};
