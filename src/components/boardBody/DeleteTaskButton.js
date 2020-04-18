import React from 'react';

function DeleteButton(onDeleteButtonClick) {
    return (
        <div className={"deleteButton"} onClick={onDeleteButtonClick}>
            <i class="fa fa-trash fa-lg"></i>
        </div>
    );
}

export default DeleteButton;