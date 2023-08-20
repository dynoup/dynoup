import Component from './Component';

export default function ApisStackList() {
  const state = {
    apisStackList: ['일', '이', '삼', '사'],
  };

  return {
    ...Component('ApisStackList', state),
    render() {
      return `
        <ol class="apis-stack-list" data-component="apis-stack-list">
          ${this.state.apisStackList
            .map((item: string) => `<li>${item}</li>`)
            .join('')}
        </ol>
      `;
    },
  };
}
