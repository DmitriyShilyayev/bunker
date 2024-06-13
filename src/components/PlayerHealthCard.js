import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function PlayerHealthCard(props) {
    const [cardShow, setCardShow] = useState(false);
    return (
        <Card
            className="text-center h-100"
            bg={cardShow ? "light" : "secondary"}
            text={cardShow ? 'dark' : 'white'}
        >
            <Card.Header as="h5">Health</Card.Header>
            <Card.Body>
                <Card.Title>{props.health[0]}</Card.Title>
                <Card.Text>{props.health[1] ? "(" + props.health[1] + ")" : ''}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button
                    variant={cardShow ? "secondary" : "dark"}
                    onClick={() => setCardShow(!cardShow)}>
                    {cardShow ? "Card shown" : "Show card"}
                </Button>
            </Card.Footer>
        </Card>
    )
};

export default PlayerHealthCard;
