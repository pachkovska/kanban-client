import React from 'react';
import SingleTaskCard from "./SingleTaskCard";

function SingleBoard ({board, handleHorizontalTaskMove, handleVerticalTaskMove, handleTaskDelete}) {

    return (
        <div className={"taskStatusSection"}>
            <div className={"taskStatusSection-title"}>{board.boardName}</div>
            <div className="titleLine"></div>
            {
                board.boardTasks.map(task => (
                    <SingleTaskCard
                        taskTitle={task.taskTitle}
                        boardName={board.boardName}
                        taskId={task.id}
                        handleHorizontalTaskMove={(args) => handleHorizontalTaskMove(args)}
                        handleVerticalTaskMove={(args) => handleVerticalTaskMove(args)}
                        handleTaskDelete={(args) => handleTaskDelete(args)}
                    />
                ))
            }
        </div>
    );
}

export default SingleBoard;