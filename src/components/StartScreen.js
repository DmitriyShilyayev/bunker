import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function StartScreen(props) {
    return (
        <Container className="mx-auto my-auto text-center">
            <h1>Welcome to Bunker</h1>
            <Button variant="primary" onClick={props.onClick}>Launch</Button>
        </Container>
    );
}

export default StartScreen;