import React, {Component} from 'react';
import axios from 'axios';
import mammoth from 'mammoth';

class Journal extends Component {
  state = {
    content: ''
  }

  componentWillMount() {
    axios.get(`/journals/Journal ${this.props.entry}.docx`, {
      responseType: 'arraybuffer'
    })
      .then(res => res.data)
      .then(arrayBuffer => {
        return mammoth.convertToHtml({ arrayBuffer })
      })
      .then(result => result.value)
      .then(data => {
        this.setState({
          content: data
        });
      });
  }

  render = () =>
    <div dangerouslySetInnerHTML={{__html: this.state.content}}/>
}

export default Journal;
