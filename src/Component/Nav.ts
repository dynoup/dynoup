import Component from '../core/Component';

export default class Nav extends Component {
  template() {
    return `
      <nav>
        <h2>메뉴</h2>
        <ul>
          <li>1번</li>
          <li>2번</li>
        </ul>
      </nav>
    `;
  }
}
