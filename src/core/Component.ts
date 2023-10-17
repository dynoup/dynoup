import { annotationRegex, stateRegex } from '../common/regex';
import { eventContainer, instanceContainer, stateContainer } from '../main';

interface ComponentProps {
  key: string;
  states: StatesType;
  template: string;
}

type StatesType = {
  [stateKey: string]: any;
};

export default class Component implements ComponentProps {
  key: string;
  states: StatesType;
  template: string;

  constructor() {
    this.key = '';
    this.states = {};
    this.template = '';
  }

  setState() {
    // root의 statepool에 연동하자.
  }

  setHandler() {
    // root의 이벤트 컨테이너에게 전달한다.
  }

  protected setTemplate(newTemplate: string): void {
    // 사용자가 주입한 jsx 값 저장
    this.template = newTemplate;
  }
  render() {
    // parse 시작
    this.parse();
    console.log('parse');
  }

  // private 메서드

  private parse() {
    console.log('parse:', this.template);

    // state 저장
    let stateKey: number = 100;
    let eventKey: any = 200;
    let instanceKey: any = 300;
    // key generator가 필요해보인다.

    const newStates = this.template.match(stateRegex);
    if (newStates) {
      // render에서 주입해준다면 지역 state값을 들고있어야 할까?
      newStates.forEach((newState) => {
        stateContainer.setState(stateKey, newState.slice(2, -2));
        stateKey++;
      });
      console.log('stateContainer:', stateContainer.statePool);
    }

    const newAnnotations = this.template.match(annotationRegex);
    if (newAnnotations) {
      newAnnotations.forEach((annotation) => {
        const temp = annotation.slice(1).split('=');
        if (temp[1]) {
          // 이벤트 어노테이션 일때
          eventContainer.setEvent(eventKey, temp[0], temp[1]);
          eventKey++;
          // 실제 이벤트의 함수는 어떻게 전달하면 좋을까?
          return;
        }

        // 1. instance를 컨테이너에서 생성하기위한 props를 만든다
        // 2. props를 넘겨주면 컨테이너에서 컴포넌트 실체를 관리한다

        instanceContainer.setInstance(instanceKey, temp);

        // 3. 컴포넌트 간의 돔
        instanceKey++;
      });
    }
    console.log('eventContainer:', eventContainer.eventPool);
    console.log('instanceContainer', instanceContainer.instancePool);
    // component / element 구분:

    // 복잡한 로직을 갖고 있다.
    // 1. Key Generator 안-난수
    // 2. component / element 구분 알고리즘
    // 3. setEvent 처리
    // 4. scheduler 담기
    // 5. instanceTree 담기
  }

  // lifecycle
  protected onMount() {
    // 컴포넌트 등록 시점 함수 실행
  }

  protected onDestroy() {
    // 컴포넌트 메모리 해제 시점 함수 실행
  }

  protected beforeUpdate() {
    // 컴포넌트 업데이트 전 시점 함수 실행
  }

  protected afterUpdate() {
    // 컴포넌트 업데이트 후 시점 함수 실행
  }
}
