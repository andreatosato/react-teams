import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { TeamsComponentContext, ThemeStyle, PrimaryButton } from 'msteams-ui-components-react';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
     <TeamsComponentContext
            fontSize={16}
            theme={ThemeStyle.Light}
        />
    );
  }
}

render(<App />, document.getElementById('root'));
export default App;