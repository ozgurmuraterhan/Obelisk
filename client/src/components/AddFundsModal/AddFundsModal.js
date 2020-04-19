import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

class AddFundsModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    };

    toggleModal = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('form submit - add funds');
        console.log(this.state.totalDeposit);
        this.toggleModal();
    };

    render = () => {
        return (
            <div>
                <Button color='primary' onClick={this.toggleModal}>Deposit</Button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader>
                        Deposit {this.props.currency.ticker}:
                    </ModalHeader>
                    <Form id='add-funds-form' onSubmit={this.handleFormSubmit}>
                        <ModalBody>
                            <FormGroup>
                                <Label for='total-deposit'>Deposit amount to main wallet:</Label>
                                <Input type='number' name='totalDeposit' id='total-deposit' placeholder='0.00000000'
                                    step='0.00000001' onChange={this.handleChange} required />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color='success'>Confirm</Button>
                            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        );
    };

};

export default AddFundsModal;