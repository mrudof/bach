import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            /*<tr>
              <td>{this.props.name}</td>
              <td>
                <div className="pictures">
                  <img src={this.props.picture} alt="faces" className={this.props.season}></img>
                </div>
              </td>
            </tr>*/
            <
            div >
            <
            div key = "name" > { this.props.name } < /div>    <
            div className = "pictures"
            key = "picture" > < img src = { this.props.picture }
            className = { this.props.season }
            /> </div >

            <
            /div >
        )
    }
}

export default ProductItem;