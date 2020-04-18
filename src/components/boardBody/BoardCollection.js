import React from 'react';
import SingleBoard from "./SingleBoard";

function BoardCollection ({tasks}) {

    // const  onMoveRightButtonClick  = (sectionTitle, taskIndex) => {
    //     props.handleTaskMoveToRight(sectionTitle, taskIndex);
    // }
    //
    // const  onMoveLeftButtonClick  = (sectionTitle, taskIndex) => {
    //     props.handleTaskMoveToLeft(sectionTitle, taskIndex);
    // }

    return (
        <div className={"boardBody"}>
            {
                tasks.map(board => (
                    <SingleBoard
                        board={board}
                    />
                ))
            }
        </div>
    );
}

export default BoardCollection;