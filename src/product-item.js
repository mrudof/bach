import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.picture}</td>
      </tr>
    )
  }
}

export default ProductItem;