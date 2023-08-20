const EventEditor = () => {
  return `<form id="form">
  <input type="radio" name="select" id="selector-call-stack" />
  <label for="selector-call-stack">call stack</label>
  <input type="radio" name="select" id="selector-callback-queue" />
  <label for="selector-web-apis">callback queue</label>
  <input type="radio" name="select" id="selector-web-apis" />
  <label for="selector-render-queue">Web APIs</label>
  <input type="radio" name="select" id="selector-render-queue" />
  <label for="selector-render-queue">render queue</label>
  <input type="text" id="text-input" />
  <button type="submit">Submit</button>
  </form>`;
};
export default EventEditor;
