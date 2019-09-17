import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';

import '../assets/stylesheets/application.scss';

// TODO: Import Core Components

// TODO: Import reducers


const initialState = {

};

const reducers = combineReducers({

});

const middlewares = applyMiddleware(reduxPromise, logger);

const store = createStore(reducers, initialState, middlewares);

// TODO: Set up roots
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
}
