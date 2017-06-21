import React, { Component } from 'react';
import ContestantInfo from './contestant-info';
import {Modal} from 'react-bootstrap'
import Overlay from './overlay';

class ProductItem extends Component {
    constructor(props){
        super(props);
        this.state = {showModal:false};
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    open() {
        this.setState({ showModal: true });
    }
    close() {
        this.setState({ showModal: false });
    }
    render() {
        return ( 
        <div onClick={this.open}>
            <div className = "gridBox">
            <ContestantInfo name = {this.props.name} picture = {this.props.picture} season={this.props.season}/>
            </div>
            <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title>Pick their job!</Modal.Title>
            </Modal.Header>
            <Overlay showModal={this.state.showModal} fullContestants={this.props.fullContestants} season={this.props.season} occupation={this.props.occupation} name={this.props.name} picture={this.props.picture}/>
            <Modal.Footer>
                <button onClick={this.close}>Close</button>
            </Modal.Footer>
            </Modal>
        </div>
        )
    }
}

export default ProductItem;