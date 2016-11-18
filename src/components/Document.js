import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import MenuEntry from './MenuEntry';
import {connect} from 'react-redux';
import CloseButton from './CloseButton';

class Document extends Component {
  get styles() {
    return StyleSheet.create({
      title: {
        'font-family': 'Open Sans',
        'font-size': '2em',
        'font-weight': 'bold',
        'text-align': 'center',
      },
      body: {
        'font-family': 'Libre Baskerville',
        'line-height': '2em',
        'font-size': '1em',
      }
    });
  }

  render = () =>
    <div>
      <CloseButton/>
      <h1 className={css(this.styles.title)}>{this.props.title}</h1>
      <div className={css(this.styles.body)} dangerouslySetInnerHTML={{__html: this.props.body}}/>
      <CloseButton bottom/>
    </div>
}

export default Document;
