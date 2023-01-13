import { createElem } from '../utils/create-element';

export const notFound = function (): void {
  // TODO render notFound here // notFound entry point
  const app = document.getElementById('app') as HTMLElement;
  app.innerHTML = '';

  const h1 = createElem('h1', 'heading');
  h1.innerHTML = '404';
  app.append(h1);
};
