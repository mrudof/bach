import React, { Component } from 'react';

class ContestantInfo extends Component {
    render() {
        return (
          <div>
            <div className = "pictures" key = "picture">
              <img alt="contestant" src = { this.props.picture } className = { this.props.season } />  
            </div> 
            <div className = "centerText" key = "name" > { this.props.name } </div>
          </div>
        );
    }
}

export default ContestantInfo;