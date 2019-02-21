import React, { Component } from "react";
import LeftSideBar from "./LeftSideBar";
import MainBody from "./MainBody";
import RightSideBar from "./RightSideBar";
import "../App.css";

class BodyContainer extends Component {
  render() {
    return (
      <div className="bodyContainer">
      
        <div className="leftContainer">
          <LeftSideBar userData={this.props.userData}/>
        </div>

        <div className="mainContainer">
          <MainBody userData={this.props.userData}/>
        </div>

        <div className="rightContainer">
          <RightSideBar userData={this.props.userData}/>
        </div>
      </div>
    );
  }
}

export default BodyContainer;
