import React from 'react';

function MoveTaskButtonUp({onMoveButtonClick}) {
    return (
        <div className={"moveTaskButton--up moveTaskButton--color"} onClick={onMoveButtonClick}>
            <i className="fa fa-angle-double-up fa-2x"></i>
        </div>
    );
}

export default MoveTaskButtonUp;