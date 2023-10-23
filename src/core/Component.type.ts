import Component from './Component';

export type ComponentKey = string;
export type ComponentClass = typeof Component;
export interface Components {
  [key: string]: Component;
}

export type ComponentProps = { [key: string]: any };

export interface ComponentFactor {
  name: string;
  props: ComponentProps;
  children: Node[];
}

export type StateKey = string;
export type Schedular =
  | {
      value: any;
      next: any;
    }
  | {};
