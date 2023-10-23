import Component from './component';
import createComponent from './createComponent';
import getStatesFromText from './getStatesFromText';
import { VARIABLE_REGEX } from './regex';

const USER_CUSTOM_COMPONENT = 'COMPONENT';
const CHILDREN_PROP = 'CHILDRENPROP';

// THINK: Component 내부 메서드로 존재하는게 좋을까?
export default function createElement(
  parentComponent: Component,
  $target: Node
) {
  // console.log('----------------------------');
  // console.log('[$target]', $target);

  // 1. target이 text node일 때
  if ($target.nodeName === '#text') {
    // 1-1. text에 변수가 주입됐는지 판별
    const variables = getStatesFromText($target.textContent!);

    // 1-1-2. state가 주입된 text인지 판별 => TODO: state 주입하기
    const state = getStatesFromText($target.textContent!);
    // console.log('[state]', state);
    return;
  }

  // HTMLElement가 아니면 return; (원활한 타입 추론을 위한 타입 가드 추가)
  if (!($target instanceof HTMLElement)) return;

  if (
    // 2. target이 user custom component일 때
    $target.nodeName === USER_CUSTOM_COMPONENT
  ) {
    const newComponent = createComponent(parentComponent, $target);
    const $component = newComponent.render();

    $target.replaceWith($component);
    return;
  }

  if (
    // 3. target이 children일 때
    $target.nodeName === CHILDREN_PROP
  ) {
    $target.replaceWith(...parentComponent.children);
  }

  // 4. target이 일반 element일 때
  // attribute에 event가 주입됐는지 판별하기 => TODO: event 등록
  [...$target.attributes].forEach(({ name, value }) => {
    if (VARIABLE_REGEX.test(name)) {
      const action = name.slice(1);
      // console.log('[event]', action, value);
      // setEvent(target, action, value);
    }
  });

  // 5. 자식들 loop 돌면서 재귀.
  [...$target.childNodes].forEach(($child) => {
    createElement(parentComponent, $child);
  });

  return;
}
