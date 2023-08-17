import { getRenderQueueList } from "../store/sample";

export default function RenderQueueListView() {
  const renderQueueList = getRenderQueueList();

  return renderQueueList.map(item => `<li>${item}</li>`).join('');
}