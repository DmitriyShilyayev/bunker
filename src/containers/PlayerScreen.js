import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCardsValues, setPlayersCards } from '../store/actions/cardsActions';
import PlayerCardsTable from '../components/PlayerCardsTable';


class PlayerScreen extends Component {
    render() {
        const { cards, setPlayersCards } = this.props;
        const playerCards = getCardsValues(cards.playersCards[0]);
        return (
            <PlayerCardsTable
                setPlayersCards={setPlayersCards}
                disaster={playerCards.disaster}
                sexAge={playerCards.sexAge}
                profession={playerCards.profession}
                health={playerCards.health}
                skills={playerCards.skills}
                personality={playerCards.personality}
                hobby={playerCards.hobby}
                fears={playerCards.fears}
                actionOne={playerCards.actionOne}
                actionTwo={playerCards.actionTwo} />
        );
    }
}

const mapStateToProps = (store) => {
    return {
        cards: store.cards,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPlayersCards: (value) => dispatch(setPlayersCards(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);