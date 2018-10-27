import {createStore , combineReducers, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
import Reducer from './reducer';
import thunk from 'redux-thunk';

export default createStore(
  combineReducers({
    Reducer,
    // use multiple reducer here
  })
  ,{},
  applyMiddleware(thunk));