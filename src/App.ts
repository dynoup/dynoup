import Component from './core/Component';

export default class App extends Component {
  constructor() {
    super();
  }

  template() {
    return `<div>
    <Header>
      <Nav />
    </Header>
    <Content />
    <footer>끝</footer>
  </div>`;
  }
}
