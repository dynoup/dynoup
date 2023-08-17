interface State {
  callStackList: any[],
  apisStackList: any[],
  renderQueueList: any[],
  callbackQueueList: any[],
}

const state = {
  callStackList: ['1', '2', '3', '4'],
  apisStackList: ['일', '이', '삼', '사'],
  renderQueueList: ['one', 'two', 'three', 'four'],
  callbackQueueList: ['하나', '둘', '셋', '넷'],
};

const getState = (name: keyof State) => {
  return state[name];
}

const setState = (name: string, newState: any[]) => {
  return {
    ...state,
    [name]: newState,
  }
}

export const getCallStackList = () => {
  return getState('callStackList');
};

export const getApisStackList = () => {
  return getState('apisStackList');
};

export const getRenderQueueList = () => {
  return getState('renderQueueList');
};

export const getCallbackQueueList = () => {
  return getState('callbackQueueList');
};