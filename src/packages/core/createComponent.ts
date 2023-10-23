import Component from './component';
import { ComponentObj } from './component.type';
import getStatesFromText from './getStatesFromText';
import { VARIABLE_REGEX } from './regex';

export default function createComponent(
  parentComponent: Component,
  $target: HTMLElement
) {
  const componentObj = [...$target.attributes].reduce(
    (obj, { name, value }) => {
      // 1. attribute가 @componentClass일 경우
      if (VARIABLE_REGEX.test(name)) {
        const targetComponent =
          parentComponent.components?.[
            `${name[1].toUpperCase()}${name.slice(2)}`
          ];

        if (!targetComponent) throw new Error('등록된 component가 없습니다.');

        obj['component'] = targetComponent;
      } else {
        // 2. 그 밖에 작성된 attribute는 props로 전달

        // value에 state가 포함됐는지 판별 => TODO: value에 state값 주입해서 전달하기
        const state = getStatesFromText(value);
        // console.log('[state]', state);

        obj.props = {
          ...obj.props,
          [name]: value,
        };
      }

      return obj;
    },
    {} as ComponentObj
  );

  const newComponent = new componentObj.component({
    ...componentObj.props,
    components: parentComponent.components, // TODO: component 동적 import...?
    children: $target.innerHTML,
  });

  console.log('[componentObj]', componentObj);
  return newComponent;
}
