import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function PlayerActionCard(props) {
    const [cardShow, setCardShow] = useState(false);
    return (
        <Card
            className="h-100"
            bg={cardShow ? "light" : "secondary"}
            text={cardShow ? 'dark' : 'white'}
        >
            <Card.Header as="h5">{props.title}</Card.Header>
            <Card.Body>
                <Card.Title>{props.action[0]}</Card.Title>
                <Card.Text>{props.action[1] ? props.action[1] : ''}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button
                    variant={cardShow ? "secondary" : "dark"}
                    onClick={() => setCardShow(!cardShow)}>
                    {cardShow ? "Card used" : "Use card"}
                </Button>
            </Card.Footer>
        </Card>
    )
};

export default PlayerActionCard;
