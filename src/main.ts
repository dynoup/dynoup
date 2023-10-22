import App from './App';
import InstancePool from './core/InstancePool';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Dynoup
  </div>
`;

// 최상단에 위치한 인스턴스 컨테이너
export const instanceContainer = new InstancePool();

const root = new App();
root.key = 'App';
root.render();
