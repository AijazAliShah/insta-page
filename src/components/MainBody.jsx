import React, { Component } from 'react';
import FeaturedStories from './FeaturedStories';
import LatestFeed from './LatestFeed';

class MainBody extends Component {
  render() {
    return (
      <div className="mainBody">
        <div className="featuredStories">
          <FeaturedStories />
        </div> 
        <br/>
        <div className="LatestFeed">
              <LatestFeed />
        </div>   
      </div>
    )
  }
}

export default MainBody;