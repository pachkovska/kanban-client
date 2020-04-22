import React from 'react';
import SingleTaskCard from "./SingleTaskCard";
import 'bootstrap/dist/css/bootstrap-grid.min.css';


function SingleBoard ({board, handleHorizontalTaskMove, handleVerticalTaskMove, handleTaskDelete, handleEditTask}) {

    return (
        <div className={"taskStatusSection"}>
            <div className={"taskStatusSection-title"}>{board.boardName.toUpperCase()}</div>
            <div className={`titleLine bg-${board.color}`}></div>
            {
                board.boardTasks.map(task => (
                    <SingleTaskCard
                        task={task}
                        taskTitle={task.taskTitle}
                        boardName={board.boardName}
                        taskId={task.id}
                        handleHorizontalTaskMove={(args) => handleHorizontalTaskMove(args)}
                        handleVerticalTaskMove={(args) => handleVerticalTaskMove(args)}
                        handleTaskDelete={(args) => handleTaskDelete(args)}
                        handleEditTask={(args) => handleEditTask(args)}
                    />
                ))
            }
        </div>
    );
}

export default SingleBoard;