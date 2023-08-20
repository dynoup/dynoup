const EventLoop = () => {
  console.log('yalo');
  const callStack = `<div id="call-stack">
    Call Stack
    <ul>
      <li>call</li>
      <li>blah</li>
    </ul>
  </div>`;

  const webApis = `<div id="web-apis">
    Web APIs
    <ul>
      <li>asdwdaws</li>
      <li>blahblah</li>
    </ul>
  </div>`;

  const renderQueue = `<div id="render-queue">
    Render Queue
    <ul>
        <li>blah</li>
        <li>yalo</li>
    </ul>
  </div>`;

  const callbackQueue = `<div id="callback-queue">
    Callback Queue
    <ul>
        <li>blash</li>
        <li>yalo</li>
    </ul>
  </div>`;
  return { callStack, webApis, renderQueue, callbackQueue };
};

export default EventLoop;
