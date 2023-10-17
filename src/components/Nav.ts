import Component from '../packages/core/component';

export default class Nav extends Component {
  template() {
    return `<nav>{children}</nav>`;
  }
}
