import { getRenderQueueList } from "../store/template";

export default function RenderQueueListView() {
  const renderQueueList = getRenderQueueList();

  return renderQueueList.map(item => `<li>${item}</li>`).join('');
}