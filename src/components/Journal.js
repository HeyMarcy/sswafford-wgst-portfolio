import React, {Component} from 'react';
import styles from './Journal.css';

import Document from './Document';

class Journal extends Component {
  render = () =>
    <div className={styles.main}>
      <Document src={`/journals/Journal ${this.props.entry}.docx`}/>
    </div>
}

export default Journal;
