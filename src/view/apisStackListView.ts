import { getApisStackList } from "../store/template";

export default function ApisStackListView() {
  const apisStackList = getApisStackList();

  return apisStackList.map(item => `<li>${item}</li>`).join('');
}