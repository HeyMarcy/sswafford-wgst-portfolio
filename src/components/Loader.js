import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import spinner from '../assets/icons/spinner.svg';

class Loader extends Component {
  get styles() {
    const size = '2em';
    const spin = {
      'from': {
        'transform': 'rotate(0deg)'
      },
      'to': {
        'transform': 'rotate(360deg)'
      }
    }
    return StyleSheet.create({
      main: {
        'position': 'fixed',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'top': '0',
        'bottom': '0',
        'left': '0',
        'right': '0',
      },
      icon: {
        'width': size,
        'height': size,
        'background-image': `url(${spinner})`,
        'background-size': 'contain',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'animation-name': spin,
        'animation-duration': '0.75s',
        'animation-iteration-count': 'infinite',
        'animation-timing-function': 'linear',
      }
    });
  }

  render = () =>
    <div className={css(this.styles.main)}>
      <span className={css(this.styles.icon)}/>
    </div>
}

export default Loader;
