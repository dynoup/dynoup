import Component from './Component';

export default function CallbackQueueList() {
  const state = {
    callbackQueueList: ['하나', '둘', '셋', '넷'],
  };

  return {
    ...Component('CallbackQueueList', state),
    render() {
      return `
        <ol class="callback-queue-list" data-component="callback-queue-list">
          ${this.state.callbackQueueList
            .map((item: string) => `<li>${item}</li>`)
            .join('')}
        </ol>
      `;
    },
  };
}
