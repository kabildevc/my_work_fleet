import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import logo from '../logo.svg';
// import './App.css';

import {getList} from '../action';

import PropType from 'prop-types';

class List extends Component {

  constructor(props) {
    super(props);
  }

  static PropType = {
    getList : PropType.func
  } 

  componentWillMount(){
    this.getList()
  }

  handlechange (eve){
    this.setState({
      [eve.target.name] : eve.target.value
    })
  }

  getList(){
    this.props.getList((resp) =>{
      console.log(resp)
    })

  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }
  render() {
    return (
      <div>
        <h2>Event List</h2>
          <table id="customers">
            <tr>
              <th>Event Name</th>
              <th>Event Description</th>
              <th>Event Title</th>
              <th>Action</th>
            </tr>
            {
              this.props.eventList && this.props.eventList.length > 0 ?
              this.props.eventList.map((data, index) => {
                return (<tr>
                  <td>{data.event_name}</td>
                  <td>{data.description}</td>
                  <td>{data.title}</td>
                  <td><Link to={'/view/'+data.event_id}>View</Link></td>
                </tr>)
              })
              :
              ''
            }
          </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    eventList: state.Reducer.eventList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getList : function(callback){
      dispatch(getList(callback))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
