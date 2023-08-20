import ApisStackList from './component/ApisStackList';
import CallStackList from './component/CallStackList';
import CallbackQueueList from './component/CallbackQueueList';
import Component from './component/Component';
import RenderQueueList from './component/RenderQueueList';

export default function App() {
  const state = {
    time: '00:00:00',
  };

  return {
    ...Component('App', state),
    render() {
      return `
        <h1>Dynoup</h1>
    
        <section>
          <time datetime="${this.state.time}">${this.state.time}</time>
          
          <div class="stack">
            <article class="call-stack">
              <h3>Call Stack</h3>
              ${CallStackList().render()}
            </article>
            
            <article class="apis-stack">
              <h3>Web APIs</h3>
              ${ApisStackList().render()}
            </article>
          </div>
    
          <div class="queue">
            <article class="render-queue">
              <h3>Render Queue</h3>
              ${RenderQueueList().render()}
            </article>
    
            <article class="callback-queue">
              <h3>Callback Queue</h3>
              ${CallbackQueueList().render()}
            </article>
          </div>
        </section>
    
        <form>
          <ul class="select">
            <li>
              <input type="radio" name="select-radio" id="select-call-stack" />
              <label for="select-call-stack">Call Stack</label>
            </li>
            <li>
              <input type="radio" name="select-radio" id="select-apis-stack" />
              <label for="select-apis-stack">Web APIs</label>
            </li>
            <li>
              <input type="radio" name="select-radio" id="select-render-queue" />
              <label for="select-render-queue">Render Queue</label>
            </li>
            <li>
              <input type="radio" name="select-radio" id="select-callback-queue" />
              <label for="select-callback-queue">Callback Queue</label>
            </li>
          </ul>
    
          <div>
            <input type="text" name="" id="" placeholder="text..." />
            <button type="submit">Submit</button>
          </div>
        </form>
      `;
    },
  };
}
