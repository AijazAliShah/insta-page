import React, { Component } from "react";
import { Image } from "react-bootstrap/";
import "../App.css";


class RightSideBar extends Component {
  render() {
    return (
      <div className="colorGray">
        <Image src={this.props.userData.userDetails.picture} width="100%" height="100%" />
        <br />
        <div display="flex" align-item="center">
          <br />
          <div>
            <h4 className="colorBlack">
              <b>{this.props.userData.userDetails.name}</b>
            </h4>
            <span>
              <b className="colorBlack">{this.props.userData.userDetails.noOfPosts}</b> Photos
            </span>
            &nbsp;
            <span>
              <b className="colorBlack">{this.props.userData.userDetails.noOfFollowers}</b> Followers
            </span>
          </div>
          <br />
          <div>
            <p>
               {this.props.userData.userDetails.details}
            </p>
            <p>
              {this.props.userData.userDetails.details}
            </p>
          </div>
          <div>
          
          { this.props.userData.userDetails.address ? 
            <div>
                <p className="colorBlack">
                  <b>locations</b>
                </p>
                <p>{this.props.userData.userDetails.address}</p>
            </div> : null
          }

           { this.props.userData.userDetails.profession ? 
            <div>
              <p className="colorBlack">
                <b>profession</b>
              </p>
              <p>{this.props.userData.userDetails.profession}</p>
            </div> : null
          }   
            

          { this.props.userData.userDetails.profession ? 
            <div>
              <p className="colorBlack">
                <b>profession</b>
              </p>
              <p>{this.props.userData.userDetails.profession}</p>
            </div> : null
          } 
          </div>
        </div>
      </div>
    );
  }
}

export default RightSideBar;
