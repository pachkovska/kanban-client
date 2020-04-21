import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

function NewTaskForm (props) {
    const {
        className
    } = props;

    const [createTaskModal, setCreateTaskModal] = useState(false);
    const [task, setTask] = useState({});

    const toggleModal = () => {
        setCreateTaskModal(!createTaskModal);
        setTask({});
    }

    const onTaskChange = (ev) => {
        const {name, value} = ev.target;
        setTask({...task, [name]: value});
    }

    const onAddTaskButtonClick = () => {
        props.handleAddTask(task);
        setCreateTaskModal(!createTaskModal);
    }

    return (
        <div>
            <div className={"createNewTaskButton"} onClick={toggleModal}><i className="fa fa-plus fa-lg create-icon"></i>Create Task</div>
            <Modal isOpen={createTaskModal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                   toggle={toggleModal} className={className}>
                <ModalHeader toggle={toggleModal}>Create New Task</ModalHeader>
                <ModalBody>
                    <Input className={"taskTitleInput"} type="text" name={"taskTitle"} onChange={onTaskChange} placeholder="Task Title ..." />
                    <Input type="textarea" name={"taskBody"} onChange={onTaskChange} placeholder="Task Description ..." rows={5} />
                </ModalBody>
                <ModalFooter>
                    <Button className={"addTaskButton-modal"} onClick={onAddTaskButtonClick}>Add Task</Button>
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default NewTaskForm;