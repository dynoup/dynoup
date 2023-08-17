import { getCallStackList } from "../store/sample";

export default function CallStackListView() {
  const callStackList = getCallStackList();

  return callStackList.map(item => `<li>${item}</li>`).join('');
}