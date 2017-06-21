import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>
          {/* Need div to contain image for cropping purposes */}
          <div className="pictures">
            <img src={this.props.picture} alt="faces" className={this.props.season}></img>
          </div>
        </td>
      </tr>
    )
  }
}

export default ProductItem;