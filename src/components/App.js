import React, {Component} from 'react';
import Menu from './Menu';
import {Provider} from 'react-redux';

class App extends Component {
  render = () =>
    <Provider store={this.props.store}>
      <Menu/>
    </Provider>
}

export default App;
