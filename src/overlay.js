import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class Overlay extends Component {
        constructor(props){
        super(props);
        this.state = {
          guessed: "",
          options: props.options
        };
    }

    bachClick(e, answer) {
        e.preventDefault();
        this.setState({guessed: answer});
        if (answer === this.props.occupation) {
            this.props.correct();
        } else {
            this.props.incorrect();
        }
    }
    render() {
        let buttonGroups;
        if(this.state.guessed !== ""){
            buttonGroups = (
            this.state.options.map((option, index) => {
                let buttonColor = '';
                if(this.state.guessed === option){
                    buttonColor = "buttonClicked";
                } 
                if (this.props.occupation === option) {
                    buttonColor =  "emerald " + buttonColor;
                } else {
                    buttonColor = "pom " + buttonColor;
                }
                return <div className = "button-wrapper" key = { index }>
            <button 
                className = {"btn choices center-block cloud " + buttonColor}
                style = {{ "pointerEvents" : "none" }}
                key = { index }
            > 
                { option }
            </button>
            </div>
                }))
        } else {
            buttonGroups=(
                this.state.options.map((option, index) => {
                    return <div key = { index } className = "button-wrapper" >
                <button className = "btn choices center-block cloud"
                    type = "button"
                    onClick = {
                        (e) => this.bachClick(e, option)}> { option } </button></div>
                }))
        }
        return ( <Modal.Body >
            <div>
            <div className = "modelPic" >
                <img alt="modal" src = { this.props.picture }
                    className = { this.props.season + 'overlay' }/>   
            </div> 
            <div className = "centerText" > { this.props.name } </div> 
            <div className = "jobOptions" > {buttonGroups} </div>
            </div> 
            </Modal.Body>
        )
    }
}
export default Overlay;