import Header from './components/Header';
import Nav from './components/Nav';
import Component from './packages/core/component';

export default class App extends Component {
  setComponents() {
    return {
      Header,
      Nav,
    };
  }

  setState() {
    return {
      count: 0,
    };
  }

  setHandler() {
    return {
      handleClick: (e: Event) => {
        console.log('[handleClick]', e.target);
        // this.state.count++;
      },
    };
  }

  template() {
    return `
      <div @click=”handleClick”>
        <component @Header count="{{count}}" state="{{state}}" name="hello">
          <component @Nav />
        </component> 
        {{count}}
      </div>
    `;
  }
}