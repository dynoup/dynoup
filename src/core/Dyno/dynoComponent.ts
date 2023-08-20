import DynoRender from '../DOM/dynoRender';
import DynoComponentType from '../Types/dynoComponent.type';
export default class DynoComponent implements DynoComponentType {
  key!: string | null;
  dynode!: HTMLElement | null;
  parent!: string | null;
  children!: string[] | null;
  dynoRender!: Function;
  dirty!: boolean;
  dynoData!: Object | null;

  initialize() {
    // key는 제네레이터로 생성해주자.
    this.key = null;
    this.dynode = null;
    this.parent = null;
    this.children = null;
    this.dynoRender = DynoRender;
    this.dirty = false;
    this.dynoData = null;
  }
}
