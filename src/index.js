import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import ReduxLogger from 'redux-logger';
import ReduxPromise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(thunk, ReduxPromise(), ReduxLogger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
