import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import MenuEntry from './MenuEntry';
import {connect} from 'react-redux';

class Menu extends Component {
  styles = StyleSheet.create({
    menu: {
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'width': '100%',
      'height': '100vh',
    }
  })

  render = () =>
    <div className={css(this.styles.menu)}>
      {
        this.props.entries.map((entry, i) => (
          <MenuEntry key={i} i={i} n={this.props.entries.length} entry={entry}/>
        ))
      }
    </div>
}

export default connect(({ entries }) => ({ entries }))(Menu);
