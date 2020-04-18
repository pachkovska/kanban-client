import React from 'react';
import MoveTaskButtonLeft from "./MoveTaskButtonLeft";
import DeleteButton from './DeleteTaskButton';

function SingleTaskCard({taskTitle, boardName}) {

    // const dragStart = (ev) => {
    //     const target = ev.target;
    //     ev.dataTransfer.setData('cardId', target.id);
    //     console.log('cardId', target.id)
    //     setTimeout(() => {
    //         target.style.display = "none";
    //     }, 0)
    // }
    //
    // const dragOver = (ev) => {
    //     ev.stopPropagation();
    // }

    return (
        <div className={"SingleTaskCard"}
             // id={props.id}
             // draggable="true"
             // onDragStart={dragStart}
             // onDragOver={dragOver}
             >
            <div className={"taskTitle"}>{taskTitle}</div>
                <MoveTaskButtonLeft />
                <DeleteButton />
        </div>
    );
}

export default SingleTaskCard;