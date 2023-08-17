export default function AppView() {
  return `
    <h1>Dynoup</h1>

    <section>
      <time datetime="00:00:00">00:00:00</time>
      
      <div class="stack">
        <article class="call-stack">
          <h3>Call Stack</h3>
          <ol class="call-stack-list" data-component="call-stack-list"></ol>
        </article>
        
        <article class="apis-stack">
          <h3>Web APIs</h3>
          <ol class="apis-stack-list" data-component="apis-stack-list"></ol>
        </article>
      </div>

      <div class="queue">
        <article class="render-queue">
          <h3>Render Queue</h3>
          <ol class="render-queue-list" data-component="render-queue-list"></ol>
        </article>

        <article class="callback-queue">
          <h3>Callback Queue</h3>
          <ol class="callback-queue-list" data-component="callback-queue-list"></ol>
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
}