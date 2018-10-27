import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import logo from '../logo.svg';
// import './App.css';

import {getDetails} from '../action';

import PropType from 'prop-types';

class View extends Component {

  constructor(props) {
    super(props);
  }

  static PropType = {
    getDetails : PropType.func
  } 

  componentWillMount(){
    this.getDetails()
  }

  handlechange (eve){
    this.setState({
      [eve.target.name] : eve.target.value
    })
  }

  getDetails(){
    if(this.props.match.params.event_id) {
      this.props.getDetails(this.props.match.params.event_id , (resp) =>{
        console.log(resp)
      })
    }
    

  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }
  render() {
    return (
      <div>
        <h2>Event Detail</h2>
          <table id="customers">
            <tr>
              <td>Event Name</td>
              <td>{this.props.eventDetails && this.props.eventDetails.event_name ?  this.props.eventDetails.event_name : ''}</td>
            </tr>
            <tr>
              <td>Event Description</td>
              <td>{this.props.eventDetails && this.props.eventDetails.description ?  this.props.eventDetails.description : ''}</td>
            </tr>
            <tr>
              <td>Event Title</td>
              <td>{this.props.eventDetails && this.props.eventDetails.title ?  this.props.eventDetails.title : ''}</td>
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
    eventDetails: state.Reducer.eventDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDetails : function(eventId, callback){
      dispatch(getDetails(eventId,callback))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
