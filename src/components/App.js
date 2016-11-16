import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import Menu from './Menu';
import {connect} from 'react-redux';
import Document from './Document';

class App extends Component {
  get styles() {
    return StyleSheet.create({
      content: {
        'position': 'relative',
        'background': 'white',
        'box-shadow': '0 0 2px 0 rgba(0,0,0,0.5)',
        'padding': '2em',
        'color': 'rgba(0,0,0,0.8)',
      },
      contentShell: {
        'transition': 'margin-top 0.5s',
        'padding': '2em',
        'margin-top': this.props.menu.visible ? '100vh' : '0em',
        'z-index': '1000',
      }
    });
  }

  render = () =>
    <div>
      <Menu/>
      <div className={css(this.styles.contentShell)}>
        <div className={css(this.styles.content)}>
          {
            this.props.entries.filter(entry => entry.open)
              .map(entry => <Document key={entry.id} title={entry.title}/>)
          }
        </div>
      </div>
    </div>
}

export default connect(state => state)(App);
