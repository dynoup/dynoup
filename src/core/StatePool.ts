interface StatePoolProps {
  statePool: StateType;
}

type StateType = {
  [stateKey: number]: any;
};

export default class StatePool implements StatePoolProps {
  statePool: StateType;
  constructor() {
    this.statePool = {};
  }
  setState(key: number, state: any) {
    this.statePool[key] = state;
  }
}
