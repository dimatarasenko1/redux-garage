import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import {
  BrowserRouter as Router, Route, Redirect, Switch
} from 'react-router-dom';
import { createHistory as history } from 'history';

import '../assets/stylesheets/application.scss';

// TODO: Import Core Components
import carsIndex from './containers/cars_index';
import carsShow from './containers/cars_show';

import carsReducer from './reducers/cars_reducer';
import garageReducer from './reducers/garage_reducer';


const initialState = {
  garage: 'cool-garage',
  cars: []
};

const reducers = combineReducers({
  garage: garageReducer,
  cars: carsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

const store = createStore(reducers, initialState, middlewares);

// TODO: Set up routes
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <div className="view-container">
          <Switch>
            <Route path="/" exact component={carsIndex} />
            <Route path="/cars/:id" component={carsShow} />
          </Switch>
        </div>
      </Router>
    </Provider>,
    root
  );
}
