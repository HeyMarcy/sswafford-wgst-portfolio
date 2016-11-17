import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import MenuEntry from './MenuEntry';
import {connect} from 'react-redux';
import CloseButton from './CloseButton';
import Journal from './Journal';

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
        'line-height': '1.5em',
        'font-size': '1.25em',
      }
    });
  }

  render = () =>
    <div>
      <CloseButton/>
      <h1 className={css(this.styles.title)}>{this.props.title}</h1>
      <Journal className={css(this.styles.body)} entry={this.props.id}/>
    </div>
}

export default Document;
