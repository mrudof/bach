import React, {Component} from 'react';
import ProductItem from './product-item';
import StackGrid from "react-stack-grid";

class List extends Component {
    render() {
        var that= this;
        var contestantslist = this.props.contestants.map(function(contestant, index) {
            return ( <
                ProductItem key = {
                    index
                }
                name = {
                    contestant.name
                }
                picture = {
                    contestant.picture
                }
                season = {
                    contestant.season
                }
                occupation = { 
                    contestant.occupation
                }
                fullContestants = {
                    that.props.fullContestants
                }
                updateScore = {
                    that.props.updateScore
                }
                updateCounter = {
                    that.props.updateScore
                }
                count = { that.props.count }
                />
            )
        })
        return ( 
        <div>
            <StackGrid className = "grid" columnWidth = {210}>{ contestantslist } </StackGrid>
        </div>
        )
    }
}

export default List;