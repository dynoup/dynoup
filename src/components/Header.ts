import Component from '../packages/core/component';

export default class Header extends Component {
  template() {
    return `<header>{children}</header>`;
  }
}
