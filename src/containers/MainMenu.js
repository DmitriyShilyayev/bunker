import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import LeaderSwitcher from '../components/LeaderSwitcher';
import LeaderMenu from '../components/LeaderMenu';
import PlayerMenu from '../components/PlayerMenu';
import setLeader, { setLeaderPlaying, setLeaderStreaming } from '../store/actions/playerActions';
import startGame, { setPlayersAmount, setPlayersNames } from '../store/actions/gameActions';
import { generatePlayersCards, setPlayersCards } from '../store/actions/cardsActions';

class MainMenu extends Component {
    render() {
        const { game, player, setLeader, startGame, generatePlayersCards, setLeaderPlaying, setLeaderStreaming, setPlayersCards, setPlayersAmount, setPlayersNames } = this.props;
        return (
            <Container className="mx-auto my-auto">
                <LeaderSwitcher setLeader={setLeader} />
                {player.leader ?
                    <LeaderMenu
                        game={game}
                        player={player}
                        startGame={startGame}
                        generatePlayersCards={generatePlayersCards}
                        setPlayersAmount={setPlayersAmount}
                        setLeaderPlaying={setLeaderPlaying}
                        setLeaderStreaming={setLeaderStreaming}
                        setPlayersNames={setPlayersNames} /> :
                    <PlayerMenu startGame={startGame} setPlayersCards={setPlayersCards} />
                }
            </Container>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        game: store.game,
        player: store.player,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLeader: (value) => dispatch(setLeader(value)),
        startGame: (value) => dispatch(startGame(value)),
        generatePlayersCards: (value) => dispatch(generatePlayersCards(value)),
        setLeaderPlaying: (value) => dispatch(setLeaderPlaying(value)),
        setLeaderStreaming: (value) => dispatch(setLeaderStreaming(value)),
        setPlayersCards: (value) => dispatch(setPlayersCards(value)),
        setPlayersAmount: (value) => dispatch(setPlayersAmount(value)),
        setPlayersNames: (value) => dispatch(setPlayersNames(value)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainMenu);