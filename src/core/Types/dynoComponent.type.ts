export default interface DynoComponentType {
  dynoRender: Function;
  dirty: boolean;
  parent: string | null;
  children: string[] | null;
  dynoData: Object | null;
  dynode: HTMLElement | null;
}
