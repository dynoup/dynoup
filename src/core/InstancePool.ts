interface InstancePoolProps {
  instancePool: InstanceType;
}

type InstanceType = {
  [instanceKey: number]: any;
};

export default class InstancePool implements InstancePoolProps {
  instancePool: InstanceType;
  constructor() {
    this.instancePool = {};
  }
  setInstance(key: number, instance: any) {
    this.instancePool[key] = instance;
  }
}
