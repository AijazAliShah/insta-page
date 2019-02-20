import React, { Component } from "react";
import LeftSideBar from "./LeftSideBar";
import MainBody from "./MainBody";
import RightSideBar from "./RightSideBar";
import "../App.css";

class BodyContainer extends Component {
  render() {
    return (
      <div className="bodyContainer">
        <div className="lefContainer">
          <LeftSideBar />
        </div>

        <div className="mainContainer">
          <MainBody />
        </div>

        <div className="rightContainer">
          <RightSideBar />
        </div>
      </div>
    );
  }
}

export default BodyContainer;
