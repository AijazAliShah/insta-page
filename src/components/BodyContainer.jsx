import React, { Component } from 'react'
import LeftSideBar from './LeftSideBar';
import MainBody from './MainBody';
import RightSideBar from './RightSideBar';
import '../App.css';

class BodyContainer extends Component {
  render() {
    return (
      <div className="bodyContainer">
        
         <RightSideBar className="RightContainer"/>
      </div>
    )
  }
}

export default BodyContainer;