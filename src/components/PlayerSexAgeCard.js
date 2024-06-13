import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function PlayerSexAgeCard(props) {
    const [cardShow, setCardShow] = useState(false);
    return (
        <Card
            className="text-center h-100"
            bg={cardShow ? "light" : "secondary"}
            text={cardShow ? 'dark' : 'white'}
        >
            <Card.Header as="h5">Sex and Age</Card.Header>
            <Card.Body>
                <Card.Title>Sex: {props.sexAge[0]}</Card.Title>
                <Card.Text>Age: {props.sexAge[1]}</Card.Text>
                <Card.Text>Sexuality: {props.sexAge[2]}</Card.Text>
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

export default PlayerSexAgeCard;
