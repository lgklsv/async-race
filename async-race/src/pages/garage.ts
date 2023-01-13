import { renderApp } from '../components/App/App';
import { renderGarage } from '../components/Garage/Garage';

export const garage = function (): void {
  renderApp(renderGarage);
};
