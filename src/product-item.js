import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <div>
              <div key = "name" > { this.props.name } </div>
              <div className = "pictures" key = "picture">
                <img src = { this.props.picture } className = { this.props.season }/> 
              </div>
            </div>
        )
    }
}

export default ProductItem;