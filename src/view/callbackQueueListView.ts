import { getCallbackQueueList } from "../store/template";

export default function CallbackQueueListView() {
  const callbackQueueList = getCallbackQueueList();

  return callbackQueueList.map(item => `<li>${item}</li>`).join('');
}