import { renderApp } from './components/App/App';
import './style.scss';

const app: HTMLElement = document.createElement('div');
app.id = 'app';
document.body.append(app);

renderApp();
