import React, {Component} from 'react';
import axios from 'axios';
import mammoth from 'mammoth';

class Document extends Component {
  state = {
    content: ''
  }

  componentWillMount() {
    axios.get(this.props.src, {
      responseType: 'arraybuffer'
    })
      .then(res => res.data)
      .then(arrayBuffer => {
        return mammoth.convertToHtml({ arrayBuffer })
      })
      .then(result => result.value)
      .then(data => data.replace(/\t/g, '&emsp;&emsp;'))
      .then(data => {
        this.setState({
          content: data
        });
      });
  }

  render = () =>
    <div dangerouslySetInnerHTML={{__html: this.state.content}}/>
}

export default Document;
