import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { decodeValues } from '../store/actions/cardsActions';


function PlayerMenu(props) {
    const playerCodeFieldId = 'playerCode';

    const[validated, setValidated] = useState(false);

    const handleSubmit = function (event) {
        event.preventDefault();
        let codeValue;
        let decodedValue;

        if (event.currentTarget.checkValidity() === false) {
            event.stopPropagation();
        } else {
            codeValue = document.getElementById(playerCodeFieldId).value;
            decodedValue = decodeValues(codeValue);
            props.setPlayersCards([decodedValue]);
            props.startGame();
        }

        setValidated(true);
    };

    const handleInput = function (event) {
        event.currentTarget.value = event.currentTarget.value.replace(/[^A-Za-z\s]/g, '');
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="12">
                    <Form.Label>Enter game code</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        minLength={10}
                        maxLength={10}
                        placeholder="Enter game code"
                        onInput={handleInput}
                        id={ playerCodeFieldId } />
                    <Form.Control.Feedback type="invalid">
                        Please enter your correct 10 characters code
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Start Game</Button>
        </Form>
    );
}

export default PlayerMenu;
