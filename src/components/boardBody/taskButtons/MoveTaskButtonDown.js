import React from 'react';

function MoveTaskButtonDown({onMoveButtonClick}) {
    return (
        <div className={"moveTaskButton--down moveTaskButton--color"} onClick={onMoveButtonClick}>
            <i className="fa fa-angle-double-down fa-2x"></i>
        </div>
    );
}

export default MoveTaskButtonDown;