import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// import Hello from './Hello'
// import Card from './Card.js'
// import CardList from './cardList.js';
// import { champs } from './Champions.js'
import {Provider, connect} from 'react-redux';
import {createLogger} from 'redux-logger';
import {createStore , applyMiddleware , combineReducers} from 'redux';
import {searchChamps, requestData} from './reducers.js';
import thunkMiddleware from 'redux-thunk'; 
import * as serviceWorker from './serviceWorker';

const logger = createLogger();
const store = createStore(searchChamps, applyMiddleware(thunkMiddleware,logger));
const rootReducer = combineReducers({searchChamps, requestData})
ReactDOM.render(
    <React.StrictMode>
  <div>
  <Provider store={store}>
     <App/>
  </Provider> 

  </div>
  </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();