import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import mammoth from 'mammoth';

class DataContainer extends Component {
  componentWillMount() {
    let loading = this.props.entries.map((entry) => {
      return axios.get(`journals/Journal ${entry.id}.docx`, {
        responseType: 'arraybuffer'
      })
        .then(res => res.data)
        .then(arrayBuffer => {
          return mammoth.convertToHtml({ arrayBuffer })
        })
        .then(result => result.value)
        .then(data => {
          this.props.dispatch({
            type: 'LOAD_JOURNAL',
            payload: {
              id: entry.id,
              content: data
            }
          });
        });
    });

    loading.push(new Promise(resolve => {
      const interval = setInterval(function() {
        if (document.readyState === 'complete') {
          resolve();
          clearInterval(interval);
        }
      }, 250);
    }));

    Promise.all(loading)
      .then(() => this.props.dispatch({ type: 'READY' }))
  }

  render() {
    return null;
  }
}

export default connect(state => state)(DataContainer);
