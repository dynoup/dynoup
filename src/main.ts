import { createRoot } from './core/render';
import './style.css';
import ApisStackListView from './view/apisStackListView';
import AppView from './view/appView';
import CallStackListView from './view/callStackListView';
import CallbackQueueListView from './view/callbackQueueListView';
import RenderQueueListView from './view/renderQueueListView';

const registry = {
  viewFunction: AppView,
  children: [
    {
      selector: 'call-stack-list',
      viewFunction: CallStackListView,
    },
    {
      selector: 'apis-stack-list',
      viewFunction: ApisStackListView,
    },
    {
      selector: 'render-queue-list',
      viewFunction: RenderQueueListView,
    },
    {
      selector: 'callback-queue-list',
      viewFunction: CallbackQueueListView,
    },
  ]
}

const root = createRoot(document.querySelector('#app') as HTMLElement);
root.render(registry);