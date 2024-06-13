import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { decodeValues } from '../store/actions/cardsActions';


function ModalComponent(props) {
    const playerCodeFieldId = 'playerCode';

    const [validated, setValidated] = useState(false);

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
            props.onHide();
        }

        setValidated(true);
    };

    const handleInput = function (event) {
        event.currentTarget.value = event.currentTarget.value.replace(/[^A-Za-z\s]/g, '');
    }
    return (
        <Modal
            show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Enter new cards code
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12">
                            <Form.Label>Enter game code</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                minLength={10}
                                maxLength={10}
                                placeholder="Enter new code"
                                onInput={handleInput}
                                id={playerCodeFieldId} />
                            <Form.Control.Feedback type="invalid">
                                Please enter your correct 10 characters code
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Submit</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};


function UpdatePlayerCards(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button className="w-100" variant="secondary" onClick={() => setModalShow(true)}>Update cards</Button>

            <ModalComponent
                show={modalShow}
                onHide={() => setModalShow(false)}
                setPlayersCards={props.setPlayersCards}
            />
        </>
    )
}

export default UpdatePlayerCards;
