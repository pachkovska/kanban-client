import React from 'react';
import MoveTaskButtonLeft from "./taskButtons/MoveTaskButtonLeft";
import MoveTaskButtonRight from "./taskButtons/MoveTaskButtonRight";
import MoveTaskButtonDown from "./taskButtons/MoveTaskButtonDown";
import MoveTaskButtonUp from "./taskButtons/MoveTaskButtonUp";
import DeleteButton from './taskButtons/DeleteTaskButton';
import EditTaskForm from './EditTaskForm';

function SingleTaskCard({taskTitle, boardName, taskId, handleHorizontalTaskMove, handleVerticalTaskMove, handleTaskDelete, handleEditTask, task}) {

    return (
        <div className={"SingleTaskCard"}>
            <div className={"taskTitle"}>{taskTitle}</div>
                <EditTaskForm
                    task={task}
                    handleEditTask={(editTask) => handleEditTask({
                        editTask: editTask,
                        boardName: boardName,
                    })}
                />
                <MoveTaskButtonLeft
                    onMoveButtonClick={() => handleHorizontalTaskMove({
                        taskId : taskId,
                        direction: 'left',
                        boardName: boardName,
                    })}
                />
                <MoveTaskButtonRight
                    onMoveButtonClick={() => handleHorizontalTaskMove({
                        taskId : taskId,
                        direction: 'right',
                        boardName: boardName,
                    })}
                />
                <MoveTaskButtonUp
                    onMoveButtonClick={() => handleVerticalTaskMove({
                        taskId : taskId,
                        direction: 'up',
                        boardName: boardName,
                    })}
                />
                <MoveTaskButtonDown
                    onMoveButtonClick={() => handleVerticalTaskMove({
                        taskId : taskId,
                        direction: 'down',
                        boardName: boardName,
                    })}
                />
                <DeleteButton
                    onDeleteButtonClick={() => handleTaskDelete({
                        taskId : taskId,
                        boardName: boardName,
                    })}
                />
        </div>
    );
}

export default SingleTaskCard;