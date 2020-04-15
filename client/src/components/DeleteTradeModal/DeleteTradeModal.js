import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import AuthService from '../AuthService/AuthService';
import axios from 'axios';

class DeleteTradeModal extends Component {

    constructor(props) {
        super(props);
        this.Auth = new AuthService();
        this.state = {
            isOpen: false
        };
    };

    toggleModal = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    };

    deleteTrade = () => {
        const config = { headers: { Authorization: `Bearer ${this.Auth.getToken()}` } };
        axios.delete(`/entryTrade/${this.props.tradeId}`, config).then(res => {
            alert(res.data.message);
        }).catch(err => {
            console.log(err);
        });
        this.props.updateTrades();
        this.toggleModal();
    };

    render = () => {
        return (
            <div>
                <Button color='danger' onClick={this.toggleModal}>Delete</Button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal}>Confirm Delete</ModalHeader>
                    <ModalBody>
                        Are you sure you want to delete this trade?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.deleteTrade}>Delete</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    };

};

export default DeleteTradeModal;
