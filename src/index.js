import axios from 'axios';
import mammoth from 'mammoth';

axios.get('/journals/Journal 2.docx', {
  responseType: 'arraybuffer'
})
  .then(res => res.data)
  .then(arrayBuffer => mammoth.convertToHtml({ arrayBuffer }))
  .then(result => result.value)
  .then(data => {
    document.getElementById('root').innerHTML = data;
  })
