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
        var jobs = [this.props.occupation];
        var that = this;
        for (var i = 0; i < this.props.fullContestants.length; i++) {
            var match = false;
            jobs.map(function(job, index) {
                if (that.props.fullContestants[i].occupation === job) {
                    match = true;
                }
            })
            if (match === false) {
                jobs.push(that.props.fullContestants[i].occupation);
                if (jobs.length === 4) {
                    break;
                }
            }
        }
        var options = jobs.sort(() => .5 - Math.random());
        let divOverlay;

        if(this.state.card === "correct"){
            divOverlay = <div><span className="glyphicon glyphicon-ok clickedOverlay check" aria-hidden="true"></span></div>;
        }
        if(this.state.card === "incorrect"){
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
                <Modal.Title className="contestantTitle">Pick {this.props.name}'s Job!</Modal.Title>
            </Modal.Header>
            <Overlay 
              showModal={this.state.showModal} 
              options={options}
              season={this.props.season}
              occupation={this.props.occupation}
              name={this.props.name}
              picture={this.props.picture}
              correct={this.updateCardCorrect}
              incorrect={this.updateCardinCorrect}
            />
            </Modal>
        </div>
        )
    }
}
export default ProductItem;