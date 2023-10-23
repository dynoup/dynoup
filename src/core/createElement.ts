import Component from './Component';
import getStatesFromText from './getStateFromText';
import createComponent from './createComponent';

const USER_CUSTOM_COMPONENT = 'COMPONENT';
const CHILDREN_PROP = 'CHILDRENPROP';

export default function createElement(component: Component, $target: Node) {
  // 1. target이 text node일 때
  if ($target.nodeName === '#text') {
    // state가 주입된 text인지 판별 => TODO: state 주입하기
    const state = getStatesFromText($target.textContent!);
    return $target;
  }

  // HTMLElement가 아니면 return; (원활한 타입 추론을 위한 타입 가드 추가)
  if (!($target instanceof HTMLElement)) return $target;

  if (
    // 2. target이 user custom component일 때
    $target.nodeName === USER_CUSTOM_COMPONENT
  ) {
    const $targetRenderResult = createComponent($target).render();
    $target.replaceWith(...$targetRenderResult);
    return $targetRenderResult;
  }

  if (
    // 3. target이 children일 때
    $target.nodeName === CHILDREN_PROP
  ) {
    $target.replaceWith(...component.children);
    return $target;
  }

  // 4. child 재귀를 돈다.
  [...$target.childNodes].forEach(($child) => {
    createElement(component, $child);
  });

  return $target;
}
