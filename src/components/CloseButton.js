import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {connect} from 'react-redux';
import close from '../actions/close';
import closeIcon from '../assets/icons/close.svg';

class CloseButton extends Component {
  get styles() {
    return StyleSheet.create({
      button: {
        'position': 'absolute',
        'top': '1em',
        'right': '1em',
        'border': 'none',
        'background': 'none',
        'font-family': 'Open Sans',
        'font-weight': 'bold',
        'font-size': '1.1em',
        'color': 'inherit',
        'display': 'flex',
        'align-items': 'center',
        'cursor': 'pointer',
      },
      icon: {
        'height': '1.25em',
        'opacity': '0.75',
        'margin-left': '0.4em',
      }
    });
  }

  click = () => {
    this.props.dispatch(close());
  }

  render = () =>
    <button
      onClick={this.click}
      className={css(this.styles.button)}>
        {'Back to Journals'}<img src={closeIcon} className={css(this.styles.icon)}/>
    </button>
}

export default connect()(CloseButton);
