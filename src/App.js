import React, { Component } from "react";
import Header from "./components/Header.jsx";
import BodyContainer from "./components/BodyContainer.jsx";

import {
  faHome,
  faHashtag,
  faCompass,
  faCheckCircle,
  faUser,
  faBell,
  faPaperPlane,
  faChartPie,
  faCog
} from "@fortawesome/free-solid-svg-icons";

const pic2 = require("./img/pic2.jpg");
const pic3 = require("./img/pic3.JPG");
const pic4 = require("./img/pic4.jpeg");
const pic5 = require("./img/pic5.jpg");
const profilePic = require("./img/pic1.jpg");


class App extends Component {
  state = {
    fakedata: {
      userDetails: {
        name: "Aijaz Ali Shah",
        picture: profilePic,
        address: "Karachi, PAK",
        noOfPosts: "100",
        noOfFollowers: "102m",
        noOfFollowing: "105m",
        details:
          "Asjhdas djsda sksad ajshdjhasd ajsdhjhasd asdjhajshd ajshdjasdgsagdkhsagd mashdgksa ahsgdags",
        profession: "Developer"
      },

      pics: [
          {
            pic: pic2,
            impressions: 500
          },
          {
            pic: pic3,
            impressions: 200
          },
          {
            pic: pic4,
            impressions: 1000
          },
          {
            pic: pic5,
            impressions: 800
          }
        ],

      linkData: [
        { link: "#feed", icon: faHome, text: "feed" },
        { link: "#Explore", icon: faCompass, text: "Explore" },
        { link: "#trending_tag", icon: faHashtag, text: "Trending Tag" },
        { link: "#top_post", icon: faCheckCircle, text: "Top Post" },
        { link: "#people", icon: faUser, text: "People" },
        { link: "#notification", icon: faBell, text: "Notification" },
        { link: "#direct", icon: faPaperPlane, text: "Direct" },
        { link: "#stats", icon: faChartPie, text: "Stats" },
        { link: "#setting", icon: faCog, text: "Setting" }
      ]
    }
  };
  render() {
    return (
      <div className="App">
        <Header profilePic={this.state.fakedata.userDetails.picture}/>
        <BodyContainer userData={this.state.fakedata} />
      </div>
    );
  }
}

export default App;
