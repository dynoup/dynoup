import { ComponentType } from '../component/Component';
import { applyDiff } from './diff';

export const createRoot = ($root: HTMLElement) => {
  if (!$root) {
    throw new Error(`${$root}]는 존재하지 않는 요소입니다.`);
  }

  return {
    render(component: () => ComponentType) {
      const $virtualRoot = $root.cloneNode(true) as Element;

      const root = component();
      $virtualRoot.innerHTML = root.render();

      // applyDiff($root, $virtualRoot);
      $root.replaceWith($virtualRoot);
    },
  };
};

// render -> diff -> replaceWith