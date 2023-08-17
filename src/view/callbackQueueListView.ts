import { getCallbackQueueList } from "../store/sample";

export default function CallbackQueueListView() {
  const callbackQueueList = getCallbackQueueList();

  return callbackQueueList.map(item => `<li>${item}</li>`).join('');
}