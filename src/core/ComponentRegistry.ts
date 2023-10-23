import { ComponentFactor, Components } from './Component.type';

// TODO: 추후 type을 잘 정의해 주자
const COMPONENT_MODULES: any = import.meta.glob('/src/Component/*.ts', {
  eager: true,
});

export default class ComponentRegistry {
  components: Components;
  componentClass: any;

  constructor() {
    this.components = {};
    this.componentClass = {};

    // 초기에 Component 폴더 내부에 있는 모든 모듈을 미리 import한다.
    Object.keys(COMPONENT_MODULES).map((component) => {
      const name = component
        .replace(/\/src\/Component\//g, '')
        .replace(/\.tsx?/g, '');
      this.componentClass[name] = COMPONENT_MODULES[component].default;
    });
    console.log(this.componentClass);
  }

  createInstance(
    key: number,
    componentName: string,
    props: ComponentFactor['props'],
    children: string
  ) {
    // component가 있는지 확인

    if (!this.componentClass[componentName]) {
      throw new Error(`Component ${componentName} not found.`);
    }
    // 새로운 인스턴스를 반환해준다.
    return new this.componentClass[componentName]({ ...props, children });
  }
}
