import Component from '../packages/core/component';

export default class Header extends Component {
  template() {
    return `
      <div class="header">
        <h1>헤더</h1>
        {{children}}
        {{state}}
      </div>
    `;
  }
}
