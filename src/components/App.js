import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import Menu from './Menu';
import {connect} from 'react-redux';
import Document from './Document';

class App extends Component {
  get styles() {
    return StyleSheet.create({
      content: {
        'position': 'fixed',
        'left': '2em',
        'right': '2em',
        'top': this.props.menu.visible ? '105%' : '2em',
        'min-height': '100%',
        'background': 'white',
        'z-index': '1000',
        'transition': '0.5s',
        'box-shadow': '0 0 5px 2px rgba(0,0,0,0.5)',
        'padding': '2em',
        'color': 'rgba(0,0,0,0.8)',
      }
    });
  }

  render = () =>
    <div>
      <Menu/>
      <div className={css(this.styles.content)}>
        {
          this.props.entries.filter(entry => entry.open)
            .map(entry => <Document key={entry.id} title={entry.title}/>)
        }
      </div>
    </div>
}

export default connect(state => state)(App);
