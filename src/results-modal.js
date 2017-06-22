import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
class ResultsModal extends Component {
      constructor(props){
        super(props);
        this.state = {
            showModal: true
        };
        this.close = this.close.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }
  render(){
    let result, giphy;
    if (this.props.score > 8){
        result = "You Won!";
        giphy = 'https://media.giphy.com/media/3o6ZsYfXaDrmmASwQo/giphy.gif';
    }
    else{
        result = "You Lost!";
        giphy = 'https://media.giphy.com/media/gcp6ZK9xFR0Nq/giphy.gif';
    }
    return(
      <Modal onHide={this.close} show={this.state.showModal}>
        <Modal.Header closeButton>
                <Modal.Title>
                    <h1 className="gameOverTitle">
                        {result}
                    </h1>
                </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            <span className="centerText">{"Final Score: " + this.props.score}</span>
            <div className = "gameOverGif">
                <img src = {giphy}/> 
            </div> 
        </Modal.Body >
      </Modal>
    );
  }
}

export default ResultsModal;