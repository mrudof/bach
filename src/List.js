import React, { Component } from 'react';
import ProductItem from './product-item';

class List extends Component {
  render() {
    var contestantslist = this.props.contestants.map(function (contestant, index) {
      return (
        <ProductItem
          key={index}
          name={contestant.name}
          picture={contestant.picture}
        />
      )
    })
    return (
      <table>
        {contestantslist}
      </table>
    )
  }
}

export default List;