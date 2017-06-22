import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
class WinningModal extends Component {
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
    return(
      <Modal onHide={this.close} show={this.state.showModal}>
        <Modal.Header closeButton>
                <Modal.Title>You won!</Modal.Title>
            </Modal.Header>
      </Modal>
    );
  }
}

export default WinningModal;