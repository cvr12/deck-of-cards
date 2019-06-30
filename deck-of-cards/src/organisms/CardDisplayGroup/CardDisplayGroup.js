import React, {Component} from 'react';
import CardDisplay from '../../atoms/CardDisplay/CardDisplay';
import InnerCardContainer from '../InnerCardContainer/InnerCardContainer';


class CardDisplayGroup extends Component {
    render(){
        const deck = this.props.deck;
        return(
        <InnerCardContainer>
            {
              deck.map((card) => {
                return(
                  <CardDisplay key={card.id} text={card.value.toString()+card.suit.toString()}/>
                );
              })
            }
        </InnerCardContainer>

        );
    }
}

export default CardDisplayGroup;