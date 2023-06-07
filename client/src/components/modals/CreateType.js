import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateType = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size='lg'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add to new Type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder={'Input Type name'} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={() => onHide()}>Close</Button>
                <Button variant={'outline-success'} onClick={onHide}>Add Type</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;