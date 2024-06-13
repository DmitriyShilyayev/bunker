import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ModalComponent(props) {
    return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    {props.disaster[0]}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{props.disaster[1]}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
    )
};

function DisasterModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button className="w-100" variant="secondary" onClick={() => setModalShow(true)}>
                {props.disaster[0]}
            </Button>

            <ModalComponent
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    disaster={props.disaster}
                />
        </>
    )
};

export default DisasterModal;
