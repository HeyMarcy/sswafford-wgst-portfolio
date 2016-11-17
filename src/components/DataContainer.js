import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import mammoth from 'mammoth';

class DataContainer extends Component {
  componentWillMount() {
    this.props.entries.map((entry) => {
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

  }

  render() {
    return null;
  }
}

export default connect(state => state)(DataContainer);
