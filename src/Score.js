import React, { Component } from 'react';

class Score extends Component {
  constructor(props) {
    super(props)
    this.state = { score: props.score || 0 };
  }

  render() {
    return (
      <div className="score">
        score: {this.state.score} / 16
      </div>
    );
  }
}

export default Score;
