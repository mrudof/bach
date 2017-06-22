import React, { Component } from 'react';
import ContestantInfo from './contestant-info';
import {Modal} from 'react-bootstrap'
import Overlay from './overlay';

class ProductItem extends Component {
    constructor(props){
        super(props);
        this.state = {
          showModal: false,
          card: "notGuessed",
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.updateCardCorrect = this.updateCardCorrect.bind(this);
        this.updateCardinCorrect = this.updateCardIncorrect.bind(this);
    }
    open() {
      if (this.state.card === "notGuessed") {
        this.setState({ showModal: true });
      }
    }
    close() {
        this.setState({ showModal: false });
    }
    updateCardCorrect() {
      this.setState({card: "correct"})
      this.props.updateScore("correct")
    }
    updateCardIncorrect() {
      this.setState({card: "incorrect"})
      this.props.updateScore("incorrect")
    }

    render() {
        let divOverlay;

        if(this.state.card === "correct"){
            console.log('hi');
            divOverlay = <div><span className="glyphicon glyphicon-ok clickedOverlay check" aria-hidden="true"></span></div>;
        }
        if(this.state.card === "incorrect"){
            console.log('hi');
            divOverlay = <div><span className="glyphicon glyphicon-remove clickedOverlay wrong" aria-hidden="true"></span></div>;
        }
        return ( 
        <div onClick={this.open}>
            <div className = {this.state.card + " gridBox"}>
            <ContestantInfo name = {this.props.name} picture = {this.props.picture} season={this.props.season}/>
            </div>
            { divOverlay }
            <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title>Pick their job!</Modal.Title>
            </Modal.Header>
            <Overlay 
              showModal={this.state.showModal} 
              fullContestants={this.props.fullContestants} 
              season={this.props.season}
              occupation={this.props.occupation}
              name={this.props.name}
              picture={this.props.picture}
              closeModal={this.close}
              correct={this.updateCardCorrect}
              incorrect={this.updateCardinCorrect}
            />
            </Modal>
        </div>
        )
    }
}
export default ProductItem;