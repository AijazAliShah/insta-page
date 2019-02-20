import React, { Component } from 'react';
import FeaturedStories from './FeaturedStories';
import LatestFeed from './LatestFeed';

class MainBody extends Component {
  render() {
    return (
      <div >
        <FeaturedStories />
        <LatestFeed />
      </div>
    )
  }
}

export default MainBody;