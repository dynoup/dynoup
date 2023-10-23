import Component from '../core/Component';

export default class Header extends Component {
  template() {
    return `
      <header class="header">
        <h1>헤더</h1>
        {{children}}
        {{state}}
      </header>
    `;
  }
}
