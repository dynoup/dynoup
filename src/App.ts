import Component from './core/Component';

export default class App extends Component {
  constructor() {
    super();
    this.setTemplate(
      `<div @click="handleClick">
        <component @CustomDiv>
          {{hello}}
          <component @Hello>
        </component> 
        {{count}}
      </div>`
    );
  }

  // setHandler() {
  //   function handleClick {
  //     this.count = this.count + 1;
  //   }
  //   return {
  //     onClick: () => {
  //       console.log('Clicked!');
  //       // this.state.count++;
  //     },
  //   };
  // }

  // lifecycle
  // onMount() {
  //   return console.log('onMounted!');
  // }

  // render() {
  //   return `
  //       <div @click="onClick">{{user}}입니다.</div>
  //   `;
  // }
}
