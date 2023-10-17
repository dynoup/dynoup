import App from './App';
import EventPool from './core/EventPool';
import InstancePool from './core/InstancePool';
import StatePool from './core/StatePool';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Dynoup
  </div>
`;
const root = new App();

// 최상단에 위치한 인스턴스 컨테이너
export const instanceContainer = new InstancePool();
export const eventContainer = new EventPool();
export const stateContainer = new StatePool();

root.render();
