import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, css} from 'aphrodite';
import Menu from './Menu';
import Content from './Content';
import Loader from './Loader';

class App extends Component {
  get styles() {
    return StyleSheet.create({
      shade: this.props.document.ready ? {} : {
        'visibility': 'hidden',
        'overflow': 'hidden',
        'height': '0',
      }
    });
  }

  render = () =>
    <div>
      <Loader/>
      <div className={css(this.styles.shade)}>
        <Menu/>
        <Content/>
      </div>
    </div>
}

export default connect(state => state)(App);
