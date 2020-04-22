import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

function EditTaskForm ({className, task, handleEditTask}) {

    const [editTaskModal, setEditTaskModal] = useState(false);
    const [editTask, setEditTask] = useState(task);

    const toggleModal = () => {
        setEditTaskModal(!editTaskModal);
        setEditTask({});
    }

    const onTaskChange = (ev) => {
        const {name, value} = ev.target;
        setEditTask({...editTask, [name]: value, id: task.id});
    }

    const onEditTaskButtonClick = () => {
        handleEditTask(editTask);
        setEditTaskModal(!editTaskModal);
    }

    return (
        <div className={"editTask"}>
            <div className={"editTaskButton"} onClick={toggleModal}><i className="fa fa-edit fa-lg"></i></div>
            <Modal isOpen={editTaskModal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                   toggle={toggleModal} className={className}>
                <ModalHeader toggle={toggleModal}>Edit Current Task</ModalHeader>
                <ModalBody>
                    <Input className={"taskTitleInput"} value={editTask.taskTitle || '' || task.taskTitle} type="text" name={"taskTitle"} onChange={onTaskChange} />
                    <Input type="textarea" value={editTask.taskBody || '' || task.taskBody} name={"taskBody"} onChange={onTaskChange} rows={5} />
                </ModalBody>
                <ModalFooter>
                    <Button className={"addTaskButton-modal"} onClick={onEditTaskButtonClick}>Save Task</Button>
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default EditTaskForm;