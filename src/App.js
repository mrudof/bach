import React, { Component } from 'react';
import List from './List';
import contestantData from './contestant-data';
import Nav from './Nav';
import { footer } from 'bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <List contestants={contestantData}/>
        <footer>
		     <p className="disclaimer">All Bachelor photos are property of their respective owners; No Copyright infringement intended.</p>
	      </footer>
      </div>
    );
  }
}

export default App;
