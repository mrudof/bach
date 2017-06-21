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
          season={contestant.season}
        />
      )
    })
    return (
      <table>
        <tbody>
        {contestantslist}
        </tbody>
      </table>
    )
  }
}

export default List;