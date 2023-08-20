import Component from './Component';

export default function RenderQueueList() {
  const state = {
    renderQueueList: ['1', '2', '3', '4'],
  };

  return {
    ...Component('RenderQueueList', state),
    render() {
      return `
        <ol class="render-queue-list" data-component="render-queue-list">
          ${this.state.renderQueueList
            .map((item: string) => `<li>${item}</li>`)
            .join('')}
        </ol>
      `;
    },
  };
}
