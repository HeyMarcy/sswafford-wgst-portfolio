import React, {Component} from 'react';
import Journal from './Journal';

class App extends Component {
  render = () =>
    <div>
      <Journal entry={10}/>
    </div>
}

export default App;
