import { createElem } from '../utils/create-element';

export const winners = function (): void {
  // TODO render winners here // winners entry point
  const app = document.getElementById('app') as HTMLElement;
  app.innerHTML = '';

  const h1 = createElem('h1', 'heading');
  h1.innerHTML = 'WINNERS';
  app.append(h1);
};
