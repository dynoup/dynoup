import { getApisStackList } from "../store/sample";

export default function ApisStackListView() {
  const apisStackList = getApisStackList();

  return apisStackList.map(item => `<li>${item}</li>`).join('');
}