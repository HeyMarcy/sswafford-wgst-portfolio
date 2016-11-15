import React, {Component} from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
