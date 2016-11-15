import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';

class MenuEntry extends Component {
  entries = {
    1: {
      title: 'Journal One',
      image: 'http://unsplash.com/photos/ndN00KmbJ1c/download',
      tint: '#2ecc71',
    },
    2: {
      title: 'Another Long Journal',
      image: 'http://unsplash.com/photos/ucdh5HMkRMg/download',
      tint: '#e74c3c',
    },
    4: {
      title: 'Example',
      image: 'http://unsplash.com/photos/VGOiY1gZZYg/download',
      tint: '#3498db',
    }
  }

  get entry() {
    return this.entries[this.props.entry];
  }

  get styles() {
    const height = (100 / this.props.n);
    return StyleSheet.create({
      position: {
        'position': 'absolute',
        'left': '0',
        'right': '0',
        'top': `${this.props.i * height}%`,
        'height': `${height}%`,
      },
      foreground: {
        'background-image': `url(${this.entry.image})`,
        'background-position': 'center',
        'background-size': 'cover',
        'opacity': '0.8',
      },
      background: {
        'background-color': this.entry.tint
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
        'transition': 'background-color 0.2s',
        ':hover': {
          'background-color': 'rgba(255,255,255,0.15)',
        }
      }
    });
  }

  render = () => 
    <div>
      <div className={css(this.styles.position, this.styles.background)}/>
      <div className={css(this.styles.position, this.styles.foreground)}/>
      <div className={css(this.styles.position, this.styles.text)}>
        {this.entry.title}
      </div>
    </div>
}

export default MenuEntry;
