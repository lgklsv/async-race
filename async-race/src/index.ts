import './style.scss';
import { pathResolver } from './router/router';

const app: HTMLElement = document.createElement('div');
app.id = 'app';
document.body.append(app);

pathResolver(window.location.pathname);
