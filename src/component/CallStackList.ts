import Component from './Component';

export default function CallStackList() {
  const state = {
    callStackList: ['1', '2', '3', '4'],
  };

  return {
    ...Component('CallStackList', state),
    render() {
      return `
        <ol class="call-stack-list" data-component="call-stack-list">
          ${this.state.callStackList
            .map((item: string) => `<li>${item}</li>`)
            .join('')}
        </ol>
      `;
    },
  };
}
