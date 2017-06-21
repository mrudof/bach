import React, { Component } from 'react';
import ContestantInfo from './contestant-info';

class ProductItem extends Component {
    render() {
        return ( 
        <div className = "gridBox" >
          <ContestantInfo name = {this.props.name} picture = {this.props.picture} season={this.props.season}/>
        </div>
        )
    }
}

export default ProductItem;