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
    var result = this.props.score > 8 ? "You Won!" : "You Lost!";
    return(
      <Modal onHide={this.close} show={this.state.showModal}>
        <Modal.Header closeButton>
                <Modal.Title>{result} + {this.props.score}</Modal.Title>
        </Modal.Header>
      </Modal>
    );
  }
}

export default ResultsModal;