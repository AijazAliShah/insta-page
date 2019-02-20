import React, { Component } from 'react';
import Header from './components/Header.jsx';
import BodyContainer from './components/BodyContainer.jsx';


class App extends Component {
  state ={
    fakedata: {
      
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <BodyContainer />
      </div>
    );
  }
}

export default App;
