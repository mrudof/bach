import React, { Component } from 'react';
import './App.css';
import List from './List'
import contestantData from './contestant-data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List contestants={contestantData}/>
      </div>
    );
  }
}

export default App;
