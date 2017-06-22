import React, { Component } from 'react';
import ResultsModal from './results-modal';

class Score extends Component {
  render() {
    let modal;
    if(this.props.count === 1) {
      modal = <ResultsModal score={this.props.score}/>
    }
        return ( <div >
            <div className = "score" >
              Score: { this.props.score } / 16 
              </div> { modal } </div>
        );
  }
}
export default Score;