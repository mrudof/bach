import React, {
    Component
} from 'react';
import ProductItem from './product-item';
import StackGrid from "react-stack-grid";

class List extends Component {
    render() {
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
                />
            )
        })
        return ( <
            StackGrid columnWidth = { 200 } >

            { contestantslist } <
            /StackGrid>
        )
    }
}

export default List;