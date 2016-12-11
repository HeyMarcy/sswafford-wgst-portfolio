import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, css} from 'aphrodite';
import Menu from './Menu';
import Content from './Content';
import Loader from './Loader';
import DataContainer from './DataContainer';
import singleOut from '../actions/singleOut';

class App extends Component {
  componentWillMount() {
    // ensure not looking for one single journal
    const id = document.location.hash.substring(1);
    if (id) this.props.dispatch(singleOut(id));
  }

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
      <DataContainer/>
      <Loader/>
      <div className={css(this.styles.shade)}>
        <Menu/>
        <Content/>
      </div>
    </div>
}

export default connect(state => state)(App);
