import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
<<<<<<< HEAD:src/results-modal.js
class ResultsModal extends Component {
      constructor(props){
=======

class LosingModal extends Component {
    constructor(props) {
>>>>>>> a2ceaca263bd9eb99d9729a0ee9cc0b89452fd2d:src/losing-modal.js
        super(props);
        this.state = {
            showModal: true
        };
        this.close = this.close.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }
<<<<<<< HEAD:src/results-modal.js
  render(){
    var result = this.props.score > 8 ? "You Won!" : "You Lost!";
    return(
      <Modal onHide={this.close} show={this.state.showModal}>
        <Modal.Header closeButton>
                <Modal.Title>{result} + {this.props.score}</Modal.Title>
        </Modal.Header>
      </Modal>
    );
  }
=======
    render() {
        return ( <
            Modal onHide = { this.close }
            show = { this.state.showModal } >
            <
            Modal.Header closeButton >
            <
            Modal.Title > < h1 className = "gameOverTitle" > You Lost! < /h1>< /Modal.Title > < /
            Modal.Header > <
            Modal.Body > < div className = "gameOverGif" >
            <
            img src = {
                'https://media.giphy.com/media/gcp6ZK9xFR0Nq/giphy.gif'
            }
            / > </div > < /Modal.Body >

            <
            /Modal>
        );
    }
>>>>>>> a2ceaca263bd9eb99d9729a0ee9cc0b89452fd2d:src/losing-modal.js
}

export default ResultsModal;