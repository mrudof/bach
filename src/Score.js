import React, { Component } from 'react';
import WinningModal from './winning-modal';
import LosingModal from './losing-modal';


class Score extends Component {
  render() {
    let modal;
    if(this.props.count === 16) {
      if(this.props.score > 8) {
        modal = (<WinningModal/>)
      } else {
        modal = (<LosingModal/>)
      }
    }
    return (
    <div>
      <div className="score">
        Score: {this.props.score} / 16
      </div>
      {modal}
    </div>
    );
  }
}

export default Score;
