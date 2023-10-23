import App from './App';
import ComponentRegistry from './core/ComponentRegistry';
import './style.css';

export const componentRegistry = new ComponentRegistry();

const $root = document.querySelector<HTMLDivElement>('#app');
const rootComponent = new App();

if ($root) $root.append(...rootComponent.render());
