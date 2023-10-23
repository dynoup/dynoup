import { ComponentFactor } from './Component.type';
import getStatesFromText from './getStateFromText';
import { VARIABLE_REGEX } from './regex';
import { componentRegistry } from '../main';

export default function createComponent($target: HTMLElement) {
  const componentObj = [...$target.attributes].reduce(
    (obj, { name, value }) => {
      // 1. attribute가 @componentClass일 경우
      if (VARIABLE_REGEX.test(name)) {
        obj['name'] = `${name[1].toUpperCase()}${name.slice(2)}`;
      } else {
        // 2. 그 밖에 작성된 attribute는 props로 전달
        const state = getStatesFromText(value);

        obj.props = {
          ...obj.props,
          [name]: value,
        };
      }
      return obj;
    },
    {} as ComponentFactor
  );

  const newComponent = componentRegistry.createInstance(
    100,
    componentObj.name,
    componentObj.props,
    $target.innerHTML
  );

  return newComponent;
}
