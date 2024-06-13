import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ModalComponent(props) {
    const playersRows = [];
    const copyText = function (value) {
        navigator.clipboard.writeText(value);
    }
    props.playersNames.forEach((name, index) => {
        if (name === 'You') {
            return;
        }
        playersRows.push(
            <Col sm={12} lg={6} key={index}>
                <Row className="mb-1">
                    <Col className="col-4">
                        {name}
                    </Col>
                    <Col className="col-4">
                        {props.codeValuesArray[index]}
                    </Col>
                    <Col className="col-4">
                        <Button onClick={() => { copyText(props.codeValuesArray[index]) }}>Copy text</Button>
                    </Col>
                </Row>
            </Col>
        )
    });
    return (
        <Modal
            show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Players codes
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    {playersRows}
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};

function LeaderGetPlayersCodes(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const codeValuesArray = [];
    props.playersCards.forEach((player) => {
        codeValuesArray.push(props.codeValues(player));
    })
    return (
        <>
            <Button className="w-100" variant="secondary" onClick={() => setModalShow(true)}>
                Get codes
            </Button>

            <ModalComponent
                show={modalShow}
                onHide={() => setModalShow(false)}
                playersNames={props.playersNames}
                codeValuesArray={codeValuesArray}
            />
        </>
    )
};

export default LeaderGetPlayersCodes;