import {
  ComponentKey,
  Components,
  Schedular,
  StateKey,
} from './component.type';
import createElement from './createElement';

export default class Component {
  key: ComponentKey;
  components: Components;
  state: StateKey[];
  schedular: Schedular; // 스케줄러는 매핑테이블을 참고한다.

  constructor() {
    // key 등록
    this.key = this.constructor.name;
    this.components = this.setComponents();
    this.state = [];
    this.schedular = {};
  }

  setComponents(): Components {
    throw new Error('Not implemented.');
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
    this.parse();
  }

  /**
   * 그리기 전에 거쳐야 해요.
   */
  private parse() {
    // create element
    const $fragment = document.createElement('div');
    $fragment.innerHTML = this.template();

    [...$fragment.childNodes].forEach(($child) => {
      createElement(this, $child);
    });

    // setState 처리
    // setEvent 처리
    // schedular 담기
    // instanceTree 담기
  }
}
