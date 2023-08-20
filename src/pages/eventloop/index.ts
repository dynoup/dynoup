import EventLoop from '../../components/EventLoop';
import EventForm from '../../components/EventForm';
import LoadSpinner from '../../components/common/LoadSpinner';

const EventPage = () => {
  const { callStack, webApis, renderQueue, callbackQueue } = EventLoop();

  return `<div id="section">
            <div id="right-side">
              <div id="queue">
                  <div id="up-side">
                  ${callStack}
                  ${webApis}
                  </div>
              ${LoadSpinner()}
                  <div id="down-side">
                  ${renderQueue}
                  ${callbackQueue}
                  </div>
              </div>
            </div>
          ${EventForm()}
        </div>`;
};

export default EventPage;
