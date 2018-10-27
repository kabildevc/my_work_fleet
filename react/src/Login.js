import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import {login} from './action';

import PropType from 'prop-types';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'demo',
      password : ''
    };
  }

  static PropType = {
    login : PropType.func
  } 

  // componentWillReceiveProps(){
  //   alert(1)
  // }

  handlechange (eve){
    this.setState({
      [eve.target.name] : eve.target.value
    })
  }

  login(eve){
    eve.preventDefault()
    if(!this.state.username || this.state.username === ''){
      alert('Please enter username')
      return false
    }

    if(!this.state.password || this.state.password === ''){
      alert('Please enter password')
      return false
    }
    this.props.login(this.state.username, this.state.password, (resp) =>{
      // console.log(resp)
      this.props.history.push('/list')
    })

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" ref="username" name="username" value={this.state.username} onChange={(e)=> {this.handlechange(e)}}/> user name 
          <input type="password" name="password" value={this.state.password}  onChange={(e)=> {this.handlechange(e)}}/> password

          <button type="submit" name="submit"  onClick={(e)=> {this.login(e)}}>Submit</button>
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
      dispatch(login(username, password, callback))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
