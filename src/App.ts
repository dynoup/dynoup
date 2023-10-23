import Content from './components/Content';
import Header from './components/Header';
import Nav from './components/Nav';
import Component from './packages/core/component';
import { Components } from './packages/core/component.type';

export default class App extends Component {
  setComponents(components: Components) {
    return {
      ...components,
      Header,
      Nav,
      Content,
    };
  }

  template() {
    return `
      <div class="app">
        <Header props="props">
          <Nav />
        </Header>
        <footer>끝</footer>
      </div>
    `;
  }
}
