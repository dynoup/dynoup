import Component from './component';
import { ComponentObj } from './component.type';

const USER_CUSTOM_COMPONENT = 'COMPONENT';
const VARIABLE_REGEX = /@[a-zA-Z]*/;
const STATE_REGEX = /{{.*}}/g;

// THINK: Component 내부 메서드로 존재하는게 좋을까?
export default function createElement(component: Component, $target: Node) {
  console.log('---------------------------------------------------');
  console.log('[$target]', $target);

  // 1. target이 text node일 때
  if ($target.nodeName === '#text') {
    // state가 주입된 text인지 판별 => TODO: state 주입하기
    const state = getStatesFromText($target.textContent!);
    console.log('[state]', state);
    return;
  }

  // HTMLElement가 아니면 return;
  if (!($target instanceof HTMLElement)) return;

  if (
    // 2. target이 user custom component일 때
    $target.nodeName === USER_CUSTOM_COMPONENT
  ) {
    createComponent(component, $target);
  } else {
    // 3. target이 일반 element일 때
    // attribute에 event가 주입됐는지 판별하기 => TODO: event 등록
    [...$target.attributes].forEach(({ name, value }) => {
      if (VARIABLE_REGEX.test(name)) {
        const action = name.slice(1);
        console.log('[event]', action, value);
        // setEvent(target, action, value);
      }
    });
  }

  // 4. 자식들 loop 돌면서 재귀.
  [...$target.childNodes].forEach(($child) => {
    createElement(component, $child);
  });
}

function createComponent(component: Component, $target: HTMLElement) {
  const componentObj = [...$target.attributes].reduce(
    (obj, { name, value }) => {
      // 1. attribute가 @componentClass일 경우
      if (VARIABLE_REGEX.test(name)) {
        const targetComponent =
          component.components?.[`${name[1].toUpperCase()}${name.slice(2)}`];

        if (!targetComponent) throw new Error('등록된 component가 없습니다.');

        obj['component'] = targetComponent;
      } else {
        // 2. 그 밖에 작성된 attribute는 props로 전달

        // value에 state가 포함됐는지 판별 => TODO: value에 state값 주입해서 전달하기
        const state = getStatesFromText(value);
        console.log('[state]', state);

        obj.props = {
          ...obj.props,
          [name]: value,
        };
      }

      return obj;
    },
    {} as ComponentObj
  );

  componentObj.children = [...$target.childNodes];

  console.log('[componentObj]', componentObj);
  // TODO: 나중에 호출할 때 new componentObj.component({ ...componentObj.props, children: componentObj.children });
  return componentObj;
}

function getStatesFromText(text: string) {
  return text.match(STATE_REGEX)?.map((state) => state.slice(2, -2));
}
