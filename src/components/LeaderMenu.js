import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function LeaderSwitcher(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = function (event) {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            let playerNames = [];

            if (props.player.leaderPlaying && !props.player.leaderStreaming) {
                playerNames.push('You');
            }
            for (let i = 0; i < event.target.elements.playerName.length; i++) {
                playerNames.push(event.target.elements.playerName[i].value);
            }
            props.setPlayersNames(playerNames);
            props.generatePlayersCards(props.game.playersAmount);
            props.startGame();
        }

        setValidated(true);
    };

    const handleInput = function (event) {
        props.setPlayersAmount(event.currentTarget.value);
    }

    const setLeaderPlaying = function (event) {
        props.setLeaderPlaying(event.currentTarget.checked);
    };

    const setLeaderStreaming = function (event) {
        props.setLeaderStreaming(event.currentTarget.checked);
    };

    let playerNamesRows = [];

    if (props.game.playersAmount <= 16) {
        if (props.player.leaderPlaying && !props.player.leaderStreaming) {
            for (let i = 1; i < props.game.playersAmount; i++) {
                playerNamesRows.push(
                    <Form.Control className="mb-2"
                        name="playerName"
                        required
                        key={i}
                        placeholder="Enter player's name" />
                );
            }
        } else {
            for (let i = 0; i < props.game.playersAmount; i++) {
                playerNamesRows.push(
                    <Form.Control className="mb-2"
                        name="playerName"
                        required
                        key={i}
                        placeholder="Enter player's name" />
                );
            }
        }
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="12">
                    <Form.Control
                        required
                        type="number"
                        min="6"
                        max="16"
                        step="1"
                        id="playersAmount"
                        placeholder="Enter players amount"
                        onInput={handleInput} />
                    <Form.Control.Feedback type="invalid">
                        Please enter players amount
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="12">
                    <Form.Check
                        type="checkbox"
                        id="leaderPlaying"
                        label="I'm in game"
                        onChange={setLeaderPlaying}
                    />
                    {props.player.leaderPlaying ?
                        <Form.Check
                            type="checkbox"
                            id="leaderStreaming"
                            label="I'll stream"
                            onChange={setLeaderStreaming}
                        /> : '' }
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="12">
                    {playerNamesRows}
                </Form.Group>
            </Row>
            <Button type="submit">Start Game</Button>
        </Form>
  );
}

export default LeaderSwitcher;
