import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function PlayerFearsCard(props) {
    const [cardShow, setCardShow] = useState(false);
    return (
        <Card
            className="text-center h-100"
            bg={cardShow ? "light" : "secondary"}
            text={cardShow ? 'dark' : 'white'}
        >
            <Card.Header as="h5">Fears</Card.Header>
            <Card.Body>
                <Card.Title>{props.fears[0]}</Card.Title>
                <Card.Text>{props.fears[1] ? "(Fear of " + props.fears[1] + ")" : ''}</Card.Text>
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

export default PlayerFearsCard;
