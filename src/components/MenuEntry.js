import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {connect} from 'react-redux';
import select from '../actions/select';

class MenuEntry extends Component {
  select = () => {
    this.props.dispatch(select(this.props.entry.id));
  }

  get styles() {
    const height = (100 / this.props.n);
    return StyleSheet.create({
      position: {
        'position': 'absolute',
        'left': '0',
        'right': '0',
        'top': this.props.entry.open ? '0%' : `${this.props.i * height - 1}%`,
        'height': this.props.entry.open ? '100%' : `${height + 1}%`,
        'z-index': this.props.entry.open ? '100' : '1',
        'transition': 'background-color 0.2s, 0.5s',
      },
      foreground: {
        'background-image': `url(${this.props.entry.image})`,
        'background-position': 'center',
        'background-size': 'cover',
        'opacity': '0.8',
      },
      background: {
        'background-color': this.props.entry.tint
      },
      text: {
        'font-family': 'Open Sans',
        'font-size': '2.25em',
        'font-weight': 'bold',
        'color': 'white',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'background-color': 'rgba(255,255,255,0)',
        'cursor': 'pointer',
        ':hover': {
          'background-color': 'rgba(255,255,255,0.15)',
        }
      }
    });
  }

  render = () =>
    <div onClick={this.select}>
      <div className={css(this.styles.position, this.styles.background)}/>
      <div className={css(this.styles.position, this.styles.foreground)}/>
      <div className={css(this.styles.position, this.styles.text)}>
        {this.props.entry.title}
      </div>
    </div>
}

export default connect()(MenuEntry);
