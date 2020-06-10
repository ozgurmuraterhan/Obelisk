import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import AuthService from '../AuthService/AuthService';

const Auth = new AuthService();

const AlertModal = props => {
    let className = 'text-success';
    let header = 'Success:';
    if (props.error) {
        className = 'text-danger';
        header = 'Error:';
    };
    const resolve = () => {
        props.toggleAlertModal();
        if (!props.error && props.reload) {
            window.location.reload();
        };
        if (props.logout) {
            Auth.logout();
            props.history.replace('/');        }
    };
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggleAlertModal} className={props.className}>
            <ModalHeader className={className}>
                <b style={{ fontSize: '24px' }}>{header}</b>
            </ModalHeader>
            <ModalBody>
                {props.message}
            </ModalBody>
            <ModalFooter>
                <Button onClick={() => { resolve(); }}>Close</Button>
            </ModalFooter>
        </Modal>
    );
};

export default AlertModal;
