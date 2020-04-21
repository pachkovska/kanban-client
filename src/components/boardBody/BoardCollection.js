import React from 'react';
import SingleBoard from "./SingleBoard";

function BoardCollection ({tasks, handleHorizontalTaskMove, handleVerticalTaskMove, handleTaskDelete, handleEditTask}) {

    return (
        <div className={"boardBody"}>
            {
                tasks.map(board => (
                    <SingleBoard
                        board={board}
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

export default BoardCollection;