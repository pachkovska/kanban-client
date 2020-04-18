import React from 'react';
import SingleTaskCard from "./SingleTaskCard";

function SingleBoard ({board}) {


    // const dragOver = (ev) => {
    //     ev.preventDefault();
    // }
    //
    // const drop = (task, ev) => {
    //     ev.preventDefault();
    //     const cardId = ev.dataTransfer.getData('cardId');
    //     const card = document.getElementById(cardId);
    //     card.style.display = 'block';
    //
    //     ev.target.appendChild(card);
    //     console.log(card);
    //     console.log(cardId);
    //     console.log(task)
    //     props.handleDragNDrop(task);
    //     ev.dataTransfer.clearData();
    // }

    return (
        <div className={"taskStatusSection"}>
            <div className={"taskStatusSection-title"}>{board.boardName}</div>
            <div className="titleLine"></div>
            {
                board.boardTasks.map(task => (
                    <SingleTaskCard
                        taskTitle={task.taskTitle}
                        boardName={board.boardName}
                    />
                ))
            }
        </div>
    );
}

export default SingleBoard;