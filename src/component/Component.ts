export interface State {
  [key: string]: any;
}

export interface ComponentType {
  type: string;
  name: string;
  node: Node | null;
  state: State;
  setState(newState: State): void;
  render(): string;
}

export default function Component(name: string, state: State): ComponentType {
  return {
    type: 'Component',
    name,
    node: null,
    state,
    setState(newState) {
      this.state = {
        ...this.state,
        ...newState,
      };
      this.render();
      // applyDiff()
    },
    render() {
      throw new Error(`${name} 컴포넌트에 render 함수가 없습니다.`);
    },
  };
}
