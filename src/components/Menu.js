import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import MenuEntry from './MenuEntry';

class Menu extends Component {
  styles = StyleSheet.create({
    menu: {
      'top': '0',
      'bottom': '0',
      'left': '0',
      'right': '0',
    }
  })

  render = () =>
    <div className={css(this.styles.menu)}>
      <MenuEntry i={0} n={6} entry={1}/>
      <MenuEntry i={1} n={6} entry={2}/>
      <MenuEntry i={2} n={6} entry={4}/>
      <MenuEntry i={3} n={6} entry={1}/>
      <MenuEntry i={4} n={6} entry={2}/>
      <MenuEntry i={5} n={6} entry={4}/>
    </div>
}

export default Menu;
