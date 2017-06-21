import React, { Component } from 'react';
import List from './List';
import contestantData from './contestant-data';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <List contestants={contestantData}/>
        <div className="footer navbar-bottom">
		     <p className="disclaimer">All Bachelor photos are property of their respective owners; No Copyright infringement intended.</p>
	      </div>
      </div>
    );
  }
}

export default App;
