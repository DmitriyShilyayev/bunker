import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameScreen from './GameScreen';
import getCards from '../store/actions/cardsActions';

class App extends Component {
    render() {
        const { store, game, cards, getCards } = this.props;
        return (
            <div>
                <GameScreen className="text-center" store={store} game={game} cards={cards} getCards={getCards} />
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        store: store,
        game: store.game,
        cards: store.cards,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCards: () => dispatch(getCards()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
