import Component from './Component';
import { instanceContainer } from '../main';

export default function createElement(
  type: string,
  component: Component,
  $element: Element
) {
  // 만약 커스텀 컴포넌트 일 때
  let key = 100;
  if ($element.hasAttribute('component')) {
    // key generator는 createInstance에서 제공하는게 맞지 않을까?
    const componentName = $element.getAttribute('component') ?? '';
    const newInstance = instanceContainer.createInstance(key, componentName);
    // key 주입
    newInstance.key = key;
    console.log(newInstance);

    // instance의 반환값은 DOM으로 -> render를 돌려준다.
    $element.appendChild(newInstance.render());
  }

  // child 재귀를 돈다.
  for (const $child of $element.childNodes) {
    if ($child instanceof Element) {
      $element.appendChild(createElement(type, component, $child));
    }
  }
  return $element;
}
