import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EyeSlash } from 'react-bootstrap-icons';

function ModalComponent(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">Use this card?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Row className="w-100">
                    <Col className="col-6">
                        <Button className="w-100" onClick={() => { props.setCardShow(true); if (props.setCardUse) { props.setCardUse(true) } }}>Yes</Button>
                    </Col>
                    <Col className="col-6">
                        <Button className="w-100" onClick={props.onHide}>No</Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    )
};
 
function LeaderDefaultCardHidden(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <EyeSlash className="position-absolute top-50 start-50 translate-middle" onClick={() => setModalShow(true)} />

            <ModalComponent
                show={modalShow}
                onHide={() => setModalShow(false)}
                setCardUse={props.setCardUse}
                setCardShow={props.setCardShow}
            />
        </>
    );
}

export default LeaderDefaultCardHidden;