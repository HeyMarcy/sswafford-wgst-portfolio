import React, {Component} from 'react';
import {applyMiddleware, createStore, compose} from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

document.body.style.overflow = 'hidden';

const interval = setInterval(function() {
  if (document.readyState === 'complete') {
    store.dispatch({ type: 'READY' });
    clearInterval(interval);
  }
}, 250);
