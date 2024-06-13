import React, { Component } from 'react';
import MainMenu from './MainMenu';
import GameTable from './GameTable';
import StartScreen from '../components/StartScreen';
import { Container } from 'react-bootstrap';


class GameScreen extends Component {
    render() {
        return (
            <Container className="d-flex vh-100 px-0" fluid={true}>
                {this.props.game.start ? <GameTable store={this.props.store} /> : this.props.cards.cardsLoaded ? <MainMenu /> : <StartScreen onClick={this.props.getCards}/>}
            </Container>
        );
    }
}

export default GameScreen;