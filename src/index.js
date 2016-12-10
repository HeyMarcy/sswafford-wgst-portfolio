import React, {Component} from 'react';
import {applyMiddleware, createStore, compose} from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './helpers/iframeScrollLock';
import 'es6-promise/auto';

// enable redux devtools in development if available
let composeEnhancers = compose;
if (process.env.NODE_ENV !== 'production') {
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }
}

// create store from reducers, devtools, and middleware
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// actually render react app to DOM
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
