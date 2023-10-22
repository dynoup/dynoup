import createElement from './createElement';

interface ComponentProps {
  key: string;
}

export default class Component implements ComponentProps {
  key: string;
  constructor() {
    this.key = '';
  }

  protected template(): string {
    // 사용자가 주입한 jsx 값 저장
    return '';
  }

  render() {
    // parse 시작
    const DOMTree = this.parse();
    // App까지 도달했을 때 화면에 렌더링 하자.
    if (this.key == 'App') {
      console.log('DomTree', DOMTree);
      document.body.appendChild(DOMTree);
    }
    return DOMTree;
  }

  private parse() {
    // 대문자 태그는 component로 처리해준다 -> component attribute를 넣어줌.
    const template = this.template().replace(
      /<([A-Z][A-Za-z]*)\s*\/?>/g,
      '<$1 component="$1">'
    );

    const $element = document.createElement('div');
    $element.innerHTML = template;

    for (const $child of $element.childNodes) {
      if ($child instanceof Element) {
        $element.appendChild(createElement('', this, $child));
      }
    }

    return $element;
    // 복잡한 로직을 갖고 있다.
    // 1. Key Generator 안-난수
    // 2. component / element 구분 알고리즘
    // 3. setEvent 처리
    // 4. scheduler 담기
    // 5. instanceTree 담기
  }
}
