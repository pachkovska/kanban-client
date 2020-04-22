import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

function NewBoardForm (props) {
    const {
        className
    } = props;

    const [createBoardModal, setCreateBoardModal] = useState(false);
    const [board, setBoard] = useState({});

    const toggleModal = () => {
        setCreateBoardModal(!createBoardModal);
        setBoard({});
    }

    const onBoardChange = (ev) => {
        const {name, value} = ev.target;
        setBoard({[name]: value});
    }

    const onAddBoardButtonClick = () => {
        props.handleAddBoard(board);
        setCreateBoardModal(!createBoardModal);
    }

    return (
        <div>
            <div className={"createNewBoardButton"} onClick={toggleModal}><i className="fa fa-plus fa-lg create-icon"></i>Create Workflow Column</div>
            <Modal isOpen={createBoardModal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                   toggle={toggleModal} className={className}>
                <ModalHeader toggle={toggleModal}>Create New Workflow Column</ModalHeader>
                <ModalBody>
                    <Input className={"boardTitleInput"} type="text" name={"boardName"} onChange={onBoardChange} placeholder="Workflow Column Title ..." />
                </ModalBody>
                <ModalFooter>
                    <Button className={"addBoardButton-modal"} onClick={onAddBoardButtonClick}>Add Column</Button>
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default NewBoardForm;