import Component from './component';

export type ComponentKey = string;
export type ComponentClass = typeof Component;
export interface Components {
  [key: string]: ComponentClass;
}

// TODO: 네이밍... 뭘로 하면 좋을까....? 약간 component fiber같은건데...
export interface ComponentObj {
  component: ComponentClass;
  // component: string;
  props: { [key: string]: any };
  children: Node[];
}

export type StateKey = string;
export type Schedular =
  | {
      value: any;
      next: any;
    }
  | {};