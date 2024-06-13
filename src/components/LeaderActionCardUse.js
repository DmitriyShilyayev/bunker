import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function ModalComponent(props) {
    let modalSize;
    let footerButtons;
    let modalBodyContent;
    switch (props.actionType) {
        case 'swap':
            if (props.actionTarget === 'all') {
                modalSize = "sm";
                modalBodyContent = <Row><h6>Use this card?</h6></Row>;
                footerButtons =
                    <Row className="w-100">
                        <Col className="col-6">
                            <Button className="w-100" onClick={props.actionHandler}>Yes</Button>
                        </Col>
                        <Col className="col-6">
                            <Button className="w-100" onClick={props.onHide}>No</Button>
                        </Col>
                    </Row>;
            } else {
                let playersButtons = [];
                props.playersNames.forEach((name, index) => {
                    let playerButton;
                    if (index === props.playerIndex) {
                        return;
                    }
                    playerButton =
                        <Col key={index} className="col-4 m-1">
                            <Button type="primary" className="w-100" onClick={() => { props.actionHandler(index) }}>{name}</Button>
                        </Col>;
                    playersButtons.push(playerButton);

                })
                modalSize = "lg";
                modalBodyContent =
                    <Container>
                        <Row className="w-100"><h6>Use this card?</h6></Row>
                        <Row className="w-100">
                            {playersButtons}
                        </Row>
                    </Container>;
                footerButtons = <Button type="primary" onClick={props.onHide}>Close</Button>;
            }
            break;
        default:
            modalSize = "sm";
            modalBodyContent = <Row><h6>Use this card?</h6></Row>;
            footerButtons =
                <Row className="w-100">
                    <Col className="col-6">
                        <Button className="w-100" onClick={props.actionHandler}>Yes</Button>
                    </Col>
                    <Col className="col-6">
                        <Button className="w-100" onClick={props.onHide}>No</Button>
                    </Col>
                </Row>;
            break;
    }
    return (
        <Modal
            show={props.show}
            size={modalSize}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Use card
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalBodyContent}</Modal.Body>
            <Modal.Footer>
                {footerButtons}
            </Modal.Footer>
        </Modal>
    )
};

function LeaderActionCardUse(props) {
    const [modalShow, setModalShow] = React.useState(false);
    let actionHandler;
    const actionType = props.value[0];
    const actionTarget = props.value[1];
    const actionKey = props.value[2];
    switch (actionType) {
        case 'bunker':
            if (actionTarget === 'up') {
                actionHandler = () => { props.changeBunkerCapacity(1); setModalShow(false); props.setCardState() };
            } else {
                actionHandler = () => { props.changeBunkerCapacity(-1); setModalShow(false); props.setCardState() };
            }
            break;
        case 'new':
            if (actionTarget === 'all') {
                actionHandler = () => { props.generateOneCardForAll(actionKey); setModalShow(false); props.setCardState() };
            } else {
                actionHandler = () => { props.generateOneCard(actionKey, props.playerIndex); setModalShow(false); props.setCardState() };
            }
            break;
        case 'swap':
            if (actionTarget === 'all') {
                actionHandler = () => { props.swapAllPlayersCards(actionKey); setModalShow(false); props.setCardState() };
            } else {
                actionHandler = (secondPlayerIndex) => { props.swapTwoPlayersCards(actionKey, props.playerIndex, secondPlayerIndex); props.setCardState() };
            }
            break;
        case 'remove':
            if (actionTarget === 'fears') {
                actionHandler = () => { props.cureFear(props.playerIndex); setModalShow(false); props.setCardState() };
            } else {
                actionHandler = () => { props.cureHealth(props.playerIndex); setModalShow(false); props.setCardState() };
            }
            break;
        default:
            actionHandler = null;
    }
    return (
        <>
            <Button className="w-100 mt-3 text-nowrap" variant={props.cardState ? "secondary" : "dark"} onClick={() => setModalShow(true)}>
                {props.cardState ? "Card used" : "Use card"}
            </Button>

            <ModalComponent
                show={modalShow}
                onHide={() => setModalShow(false)}
                actionType={actionType}
                actionTarget={actionTarget}
                actionHandler={actionHandler}
                actionKey={actionKey}
                playersNames={props.playersNames}
                playerIndex={props.playerIndex} />
        </>
    )
};

export default LeaderActionCardUse;