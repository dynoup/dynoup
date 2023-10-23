import Component from './core/Component';

export default class App extends Component {
  template() {
    return `
      <div class="app">
        <Header props="props">
          <Nav />
        </Header>
        <Content/>
        <footer>끝</footer>
      </div>
    `;
  }
}
