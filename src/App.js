import React, { Component } from 'react';
import List from './list';
import contestantData from './contestant-data';
import Nav from './nav';

class App extends Component {
  render() {
    const n = 16;
    const shuffled = contestantData.sort(() => .5 - Math.random());// shuffle  
    let selected = shuffled.slice(0,n);
    selected.forEach(function(item){ 
      item.clicked = 0;
    });
    return (
      <div className="App">
        <Nav/>
        <List contestants={selected}/>
        <div className="footer navbar-bottom">
		     <p className="disclaimer">All Bachelor photos are property of their respective owners; No Copyright infringement intended.</p>
	      </div>
      </div>
    );
  }
}

export default App;
