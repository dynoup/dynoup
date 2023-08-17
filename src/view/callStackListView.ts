import { getCallStackList } from "../store/template";

export default function CallStackListView() {
  const callStackList = getCallStackList();

  return callStackList.map(item => `<li>${item}</li>`).join('');
}