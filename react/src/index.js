import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { createStore } from 'redux'
// import myreducer from './reducer'
import { Provider } from 'react-redux'
import store from './stores';
import Login from './Login'
import List from './event/List'
import View from './event/View'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Login} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/list" component={List} exact/>
        <Route path="/view/:event_id" component={View} exact/>
      </div>
    </Router>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
