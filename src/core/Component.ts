import createElement from './createElement';
import {
  CHILDREN_PROPS_REGEX,
  COMPONENT_END_TAG_REGEX,
  COMPONENT_START_TAG_REGEX,
} from './regex';

interface ComponentProps {
  key: string;
}

export default class Component implements ComponentProps {
  key: string;
  children: Node[];

  constructor(props?: any) {
    this.key = '';
    this.children = this.setChildren(props?.children);
  }

  protected template(): string {
    // 사용자가 주입한 jsx 값 저장
    return '';
  }

  render() {
    // parse 시작
    const DOMList = this.parse();
    return DOMList;
  }

  private parse() {
    const template = this.template()
      // 1-1. 열린 컴포넌트 태그 찾기
      .replace(
        COMPONENT_START_TAG_REGEX,
        (_, captureStartTag, captureAttributes) =>
          // 닫힘 플래그가 포함됐는지 체크
          captureAttributes.includes('/')
            ? `<component @${captureStartTag}${captureAttributes.replace(
                '/',
                ''
              )}></component>`
            : `<component @${captureStartTag}${captureAttributes}>`
      )
      // 1-2. 닫힘 컴포넌트 태그
      .replace(COMPONENT_END_TAG_REGEX, '</component>')
      // 1-3. children 찾기
      .replace(CHILDREN_PROPS_REGEX, '<childrenProp></childrenProp>');

    // 2. 가상 element를 이용하여 template을 DOM으로 만든 후
    const $temp = document.createElement('div');
    $temp.innerHTML = template;

    [...$temp.childNodes].forEach(($child) => {
      createElement(this, $child);
    });

    // $temp의 내용물을 반환한다.
    return [...$temp.childNodes];
  }

  private setChildren(children: string) {
    const $temp = document.createElement('div');
    $temp.innerHTML = children;

    [...$temp.childNodes].forEach(($child) => {
      createElement(this, $child);
    });

    // return $temp.innerHTML;
    return [...$temp.childNodes];
  }
}
