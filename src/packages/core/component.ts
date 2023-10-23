import {
  ComponentKey,
  Components,
  Schedular,
  StateKey,
} from './component.type';
import createElement from './createElement';
import {
  CHILDREN_PROPS_REGEX,
  COMPONENT_END_TAG_REGEX,
  COMPONENT_START_TAG_REGEX,
} from './regex';

export default class Component {
  key: ComponentKey;
  components: Components;
  state: StateKey[];
  schedular: Schedular; // 스케줄러는 매핑테이블을 참고한다.
  // children: string;
  children: Node[];

  constructor(props?: any) {
    // key 등록
    this.key = this.constructor.name;
    this.components = this.setComponents(props?.components);
    this.state = [];
    this.schedular = {};
    this.children = this.setChildren(props?.children);
  }

  setComponents(components?: Components): any {
    return {
      ...components,
    };
    // throw new Error('Not implemented.');
  }

  setState() {
    // root에 이벤트 달아주는 애한테 전달하는 함수
    return {};
  }

  setHandler() {}

  onMount() {}

  onDestroy() {}

  beforeUpdate() {}

  afterUpdate() {}

  /**
   * 사용자가 요청하는 Component return 모양새
   */
  template(): string {
    throw new Error('메서드를 구현해주세요.');
  }

  /**
   * 그려주세요
   */
  render() {
    return this.parse(); // DOM
    // TODO: parse가 return한걸로 diffing 해야함
  }

  /**
   * 그리기 전에 거쳐야 해요.
   */
  private parse() {
    // 1. 컴포넌트 태그 찾아서 <component @ComponentName> 형태로 교체
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

    console.log('[newTemplate]', template);

    // 2. 가상 element를 이용하여 template을 DOM으로 만든 후
    const $fragment = document.createElement('div');
    $fragment.innerHTML = template;

    // 일반 HTMLElement vs Component 구분
    // state 식별 및 주입
    // event 식별 및 주입
    // schedular 주입
    // instance tree 주입
    [...$fragment.childNodes].forEach(($child) => {
      createElement(this, $child);
    });

    return $fragment.firstElementChild as Node;
  }

  private setChildren(children: string) {
    const $fragment = document.createElement('div');
    $fragment.innerHTML = children;

    [...$fragment.childNodes].forEach(($child) => {
      createElement(this, $child);
    });

    // return $fragment.innerHTML;
    return [...$fragment.childNodes];
  }
}
