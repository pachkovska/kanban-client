import React from 'react';

function MoveTaskButtonLeft({onMoveButtonClick}) {
    return (
        <div className={"moveTaskButton--left"} onClick={onMoveButtonClick}>
            <i className="fa fa-angle-double-left fa-2x"></i>
        </div>
    );
}

export default MoveTaskButtonLeft;