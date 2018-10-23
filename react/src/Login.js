import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {login} from './action';

import PropTypes from 'prop-types';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password : ''
    };
  }

  static PropType = {
    login : PropType.func
  } 

  handlechange (eve){
    this.setState({
      [eve.target.name] : eve.target.value
    })
  }

  login(eve){
    eve.preventDefault()

    this.props.login(this.state.username, this.state.password, (resp) =>{
      console.log(data)
    })

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <input type="text" ref="username" name="username" value={this.state.username} onClick={(e)=> {this.handlechange(e)}}/> user name 
          <input type="password" name="password" value={this.state.password}  onClick={(e)=> {this.handlechange(e)}}/> password

          <input type="submit" name="password" value={this.state.password}  onClick={(e)=> {this.login(e)}}/> password
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loginData: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login : function(username, password, callback){
      dispatch(loginAction(username, password, callback))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
