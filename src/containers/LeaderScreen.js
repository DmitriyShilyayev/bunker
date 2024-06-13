import React, { Component } from 'react';
import { connect } from 'react-redux';
import { swapTwoPlayersCards, swapAllPlayersCards, generateOneCard, generateOneCardForAll, cureFear, cureHealth } from '../store/actions/cardsActions';
import { changeBunkerCapacity } from '../store/actions/gameActions';
import LeaderCardsTable from '../components/LeaderCardsTable';


class LeaderScreen extends Component {
    render() {
        const { game, cards, player, swapTwoPlayersCards, swapAllPlayersCards, generateOneCard, generateOneCardForAll, changeBunkerCapacity, cureFear, cureHealth } = this.props;
        return (
            <LeaderCardsTable
                game={game}
                cards={cards}
                player={player}
                swapTwoPlayersCards={swapTwoPlayersCards}
                swapAllPlayersCards={swapAllPlayersCards}
                generateOneCard={generateOneCard}
                generateOneCardForAll={generateOneCardForAll}
                cureFear={cureFear}
                cureHealth={cureHealth}
                changeBunkerCapacity={changeBunkerCapacity} />
        );
    }
}

const mapStateToProps = (store) => {
    return {
        game: store.game,
        cards: store.cards,
        player: store.player,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        swapTwoPlayersCards: (key, indexOne, indexTwo) => dispatch(swapTwoPlayersCards(key, indexOne, indexTwo)),
        swapAllPlayersCards: (key) => dispatch(swapAllPlayersCards(key)),
        generateOneCard: (key, userIndex) => dispatch(generateOneCard(key, userIndex)),
        generateOneCardForAll: (key) => dispatch(generateOneCardForAll(key)),
        cureFear: (value) => dispatch(cureFear(value)),
        cureHealth: (value) => dispatch(cureHealth(value)),
        changeBunkerCapacity: (value) => dispatch(changeBunkerCapacity(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderScreen);