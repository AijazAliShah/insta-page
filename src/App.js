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
const pic6 = require("./img/pic6.jpg");
const pic7 = require("./img/pic7.jpg");
const pic8 = require("./img/pic8.jpg");
const pic9 = require("./img/pic9.jpg");
const pic10 = require("./img/pic10.jpg");
const pic11 = require("./img/pic11.jpg");
const pic12 = require("./img/pic12.jpg");
const pic13 = require("./img/pic13.jpg");
const pic14 = require("./img/pic14.jpeg");
const pic15 = require("./img/pic15.jpg");
const pic16 = require("./img/pic16.jpg");
const pic17 = require("./img/pic17.jpg");
const pic18 = require("./img/pic18.jpg");
const pic19 = require("./img/pic19.jpeg");
const pic20 = require("./img/pic20.jpeg");
const profilePic = require("./img/pic1.jpg");

class App extends Component {
  constructor() {
    super();
    this.state = {
      fakedata: {
        id:"001",
        userDetails: {
          id: "1",
          name: "Aijaz Ali Shah",
          picture: profilePic,
          address: "Karachi, PAK",
          noOfPosts: "100",
          noOfFollowers: "102m",
          noOfFollowing: "105m",
          details:
            "Asjhdas djsda sksad ajshdjhasd ajsdhjhasd asdjhajshd ajshdjasdgsagdkhsagd mashdgksa ahsgdags",
          profession: ""
        },
       
        pics: [
          {
            id:"1", 
            pic: pic2,
            impressions: 500
          },
          {
            id:"2", 
            pic: pic3,
            impressions: 200
          },
          {
            id:"3", 
            pic: pic4,
            impressions: 1000
          },
          {
            id:"4", 
            pic: pic5,
            impressions: 914
          },
          {
            id:"5", 
            pic: pic6,
            impressions: 484
          },
          {
            id:"6", 
            pic: pic7,
            impressions: 200
          },
          {
            id:"7", 
            pic: pic8,
            impressions: 944
          },
          {
            id: "8", 
            pic: pic9,
            impressions: 484
          },
          {
            id:"9", 
            pic: pic10,
            impressions: 546
          },
          {
            id:"10", 
            pic: pic11,
            impressions: 500
          },
          {
            id: "11", 
            pic: pic12,
            impressions: 484
          },
          {
            id:"12", 
            pic: pic13,
            impressions: 200
          },
          {
            id:"13", 
            pic: pic14,
            impressions: 1000
          },
          {
            id:"14", 
            pic: pic15,
            impressions: 914
          },
          {
            id:"15", 
            pic: pic16,
            impressions: 484
          },
          {
            id:"16", 
            pic: pic17,
            impressions: 200
          },
          {
            id:"17", 
            pic: pic18,
            impressions: 944
          },
          {
            id: "18", 
            pic: pic19,
            impressions: 484
          },
          {
            id:"19", 
            pic: pic20,
            impressions: 546
          }
        ],

        linkData: [
          { id:"1", link: "#feed", icon: faHome, text: "feed" },
          { id:"2", link: "#Explore", icon: faCompass, text: "Explore" },
          { id:"3", link: "#trending_tag", icon: faHashtag, text: "Trending Tag" },
          { id:"4", link: "#top_post", icon: faCheckCircle, text: "Top Post" },
          { id:"5", link: "#people", icon: faUser, text: "People" },
          { id:"6", link: "#notification", icon: faBell, text: "Notification" },
          { id:"7", link: "#direct", icon: faPaperPlane, text: "Direct" },
          { id:"8", link: "#stats", icon: faChartPie, text: "Stats" },
          { id:"9", link: "#setting", icon: faCog, text: "Setting" }
        ]
      }
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <Header userData={this.state.fakedata} />
        <BodyContainer userData={this.state.fakedata} />
      </div>
    );
  }
}

export default App;
