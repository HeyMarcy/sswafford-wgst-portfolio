import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, css} from 'aphrodite';
import Document from './Document';

class Content extends Component {
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
        'padding': '2em 3em',
        'margin-top': this.props.menu.visible ? '100vh' : '1px',
      }
    });
  }

  render = () =>
    <div className={css(this.styles.contentShell)} style={{zIndex:1000}}>
      <div className={css(this.styles.content)} style={{zIndex:500}}>
        {
          this.props.entries.filter(entry => entry.open)
            .map(entry => <Document key={entry.id} {...entry}/>)
        }
      </div>
    </div>
}

export default connect(state => state)(Content);
