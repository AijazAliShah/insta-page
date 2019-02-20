import React, { Component } from "react";
import FeaturedStories from "./FeaturedStories";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faThLarge } from "@fortawesome/free-solid-svg-icons";

class MainBody extends Component {
  render() {
    return (
      <div className="mainBody">
        <div className="featuredStories">
          <FeaturedStories
            leftData="Featured Stories"
            rightData="Popular Stories"
          />
        </div>

        <br />

        <div className="LatestFeed">
          <FeaturedStories
            leftData="Latest Feed"
            rightData={
              <div>
                <FontAwesomeIcon icon={faBars} />
                &nbsp;
                <FontAwesomeIcon icon={faThLarge} />
              </div>
            }
          />
        </div>
      </div>
    );
  }
}

export default MainBody;
