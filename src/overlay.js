import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import ContestantInfo from './contestant-info';

class Overlay extends Component{

    bachClick(e, answer){
        e.preventDefault();
        this.props.closeModal();
        if (answer === this.props.occupation){
            this.props.correct();
        } else {
            this.props.incorrect();
        }
    }
    render(){
        var jobs = [this.props.occupation];
        var that = this;
        for (var i=0; i<this.props.fullContestants.length; i++){
            var match = false;
            jobs.map(function(job,index){
                if (that.props.fullContestants[i].occupation === job){
                    match = true;
                }
            })
            if (match === false){
                jobs.push(that.props.fullContestants[i].occupation);
                if (jobs.length === 4){
                    break;
                }
            }
        }  
        var options = jobs.sort(() => .5 - Math.random());
        return (
            <Modal.Body>
                <div>
                    <div className="modelPic">
                        <img src = { this.props.picture } className={this.props.season + 'overlay'}/>  
                    </div> 
                    <div className = "centerText" > { this.props.name } </div>
                    <div className="jobOptions">
                        {options.map((option, index) => {return <button className="btn btn-primary choices" key={index} onClick={(e) => this.bachClick(e, option)}>{option}</button>})}
                    </div>
                </div>
            </Modal.Body>
            )
    }
}
export default Overlay;