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
const profilePic = require("./img/pic1.jpg");


class App extends Component {
  
  constructor(props) {
    super(props);
      this.state = {
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
       //pic2,pic3,pic4,pic5
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
            impressions: 914
          },
          // {
          //   pic: pic6,
          //   impressions: 484
          // },
          // {
          //   pic: pic7,
          //   impressions: 200
          // },
          // {
          //   pic: pic8,
          //   impressions: 944
          // },
          // {
          //   pic: pic9,
          //   impressions: 484
          // },
          // {
          //   pic: pic10,
          //   impressions: 546
          // }
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
      ],

      featuredPics:[]
    }
  };
   // this.compareBy.bind(this);
   // this.sortBy.bind(this);

  }

  // componentDidMount() {
  //   this.sortBy('pics');
  // }

  // compareBy(key) {
  //   return function (a, b) {
  //     if (a[key] < b[key]) return -1;
  //     if (a[key] > b[key]) return 1;
  //     return 0;
  //   };
  // }
 
  // sortBy(key) {
  //   const { featuredPics } = this.state;
  //  // featuredPics = [...this.state.pics];
  //   this.state.featuredPics= this.state.pics.sort(this.compareBy(key));
  //   this.setState({featuredPics});
  // }

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
