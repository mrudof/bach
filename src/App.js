import React, { Component } from 'react';
import List from './List';
import Nav from './Nav';
import selected from './random';
import contestantData from './contestant-data';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      score: 0,
      arrayOfCont: selected
    };
    this.updateScore = this.updateScore.bind(this);
  }
  updateScore(){
    this.setState({score: this.state.score + 1});
  }

  render() {
    const shuffled = contestantData.sort(() => .5 - Math.random());// shuffle  
    return (
      <div className="App">
        <Nav score={this.state.score}/>
        <List updateScore={this.updateScore} contestants={this.state.arrayOfCont} fullContestants={shuffled}/>
        <div className="footer navbar-bottom">
		     <p className="disclaimer">All Bachelor photos are property of their respective owners; No Copyright infringement intended.</p>
	      </div>
      </div>
    );
  }
}

export default App;
