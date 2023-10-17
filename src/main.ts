import App from './App';
import './style.css';

const root = document.querySelector<HTMLDivElement>('#app');

const componentInstance = new App();
componentInstance.render();
