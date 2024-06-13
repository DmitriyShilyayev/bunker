import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function PlayerDefaultCard(props) {
    const [cardShow, setCardShow] = useState(false);
    return (
        <Card
            className="text-center h-100"
            bg={cardShow ? "light" : "secondary"}
            text={cardShow ? 'dark' : 'white'}
        >
            <Card.Header as="h5">{props.title}</Card.Header>
            <Card.Body>
                <Card.Title>{props.value}</Card.Title>
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

export default PlayerDefaultCard;
