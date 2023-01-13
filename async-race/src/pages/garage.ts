import { createElem } from '../utils/create-element';

export const garage = function (): void {
  // TODO render garage here // Garage entry point
  const app = document.getElementById('app') as HTMLElement;
  app.innerHTML = '';

  const h1 = createElem('h1', 'heading');
  h1.innerHTML = 'GARAGE';
  app.append(h1);
};
