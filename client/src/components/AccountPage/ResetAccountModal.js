import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import './AccountPage.css';

class ResetAccountModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    };

    toggleModal = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    };

    handleFormSubmit = () => {
        console.log('reset account');
        this.toggleModal();
    };

    render = () => {
        return (
            <div>
                <Button className='account-btn' onClick={this.toggleModal}><FontAwesomeIcon icon='edit' /> Reset Account</Button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal} className='text-danger'>Reset Account</ModalHeader>
                    <ModalBody>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.handleFormSubmit}>Confirm</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    };

};

export default ResetAccountModal;
