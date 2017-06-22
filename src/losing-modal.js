import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class LosingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true
        };
        this.close = this.close.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }
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
}

export default LosingModal;