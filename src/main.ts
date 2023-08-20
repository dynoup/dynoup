import { createRoot } from './core/render';
import './style.css';
import App from './App';

const root = createRoot(document.querySelector('#app') as HTMLElement);
root.render(App);
