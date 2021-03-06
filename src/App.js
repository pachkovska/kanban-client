import React, {useEffect, useState} from 'react';
import './App.css';
import NewTaskForm from "./components/createNewTask/NewTaskForm";
import NewBoardForm from "./components/boardBody/NewBoardForm";
import BoardCollection from "./components/boardBody/BoardCollection";
import axios from 'axios';

const tasksInitial = [
    {
        boardName: 'todo',
        color: 'secondary',
        boardTasks: [],
    },
    {
        boardName: 'progress',
        color: 'primary',
        boardTasks: [],
    },
    {
        boardName: 'review',
        color: 'warning',
        boardTasks: [],
    },
    {
        boardName: 'done',
        color: 'success',
        boardTasks: [],
    },
];

const url = 'http://localhost:4000/';

function App() {

    const [tasks, setTasks] = useState(tasksInitial);

    const getTasks = () => {
        axios.get(url)
            .then(function (response) {
                const dbTasks = response.data.tasks;
                console.log(dbTasks);
                const tasksToDisplay = [...tasks];
                tasksToDisplay.map(board => {
                    board.boardTasks = dbTasks.filter(task => task.status === board.boardName);
                    }
                );
                setTasks(tasksToDisplay);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getTasks();
    }, []);

    const handleAddBoard = (board) => {
        const updatedBoardList = [...tasks];
        updatedBoardList.push({...board, color: 'primary', boardTasks: []});
        setTasks(updatedBoardList);
    }

    const handleAddTask = (newTask) => {
        console.log(newTask);
        axios.post(url, {
            "taskTitle": newTask.taskTitle,
            "taskBody": newTask.taskBody
        })
            .then(function (response) {
                console.log(response);
                getTasks();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleTaskDelete = (args) => {
        console.log(args);
        axios.delete(`${url}${args.taskId}`)
            .then(function (response) {
                console.log(response);
                getTasks();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleEditTask = (args) => {
        console.log("args from handle edit task:" , args)
        axios.patch(`${url}${args.editTask._id}`, {
            "taskTitle": args.editTask.taskTitle,
            "taskBody": args.editTask.taskBody,
            "status": args.editTask.status
        })
            .then(function (response) {
                console.log(response);
                getTasks();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleHorizontalTaskMove = (args) => {
        const boardIndex = tasks.findIndex(board => board.boardName === args.boardName);

        if (args.direction === 'left' && boardIndex <= 0) return;
        if ((args.direction === 'right' && boardIndex === tasks.length - 1) || boardIndex < 0) return;

        const updatedTasks = [...tasks];
        const taskToMove = updatedTasks[boardIndex].boardTasks.find(el => el.id === args.taskId);

        updatedTasks[boardIndex].boardTasks = updatedTasks[boardIndex].boardTasks.filter(el => el.id !== args.taskId);

        if (args.direction === 'left') updatedTasks[boardIndex - 1].boardTasks.push(taskToMove);
        if (args.direction === 'right') updatedTasks[boardIndex + 1].boardTasks.push(taskToMove);

        setTasks(updatedTasks);
    }

    const handleVerticalTaskMove = (args) => {
        console.log(args);
        const rearranged = tasks.map(board => {
            if (board.boardName === args.boardName) {
                const boardTasks = args.direction === 'up'
                    ? swapUp(board.boardTasks, args.taskId)
                    : swapDown(board.boardTasks, args.taskId);

                return {...board, boardTasks};
            } else return board;
        });
        setTasks(rearranged);
    }

    function swapUp(arr_, id) {
        const arr = [...arr_];
        let si = arr.findIndex(el => el.id === id);
        if (si <= 0) return arr;
        const prev = arr[si - 1];
        const curr = arr[si];
        arr[si] = prev;
        arr[si - 1] = curr;
        return arr;
    }

    function swapDown(arr_, id) {
        const arr = [...arr_];
        let si = arr.findIndex(el => el.id === id);
        if (si >= arr.length - 1) return arr;
        const prev = arr[si + 1];
        const curr = arr[si];
        arr[si] = prev;
        arr[si + 1] = curr;
        return arr;
    }

    return (
        <div className="App">
            <div className={"appHeader"}>Kanban Style Task Board</div>
            <div className={"appSubHeader"}>Concentrate on task completion instead of remembering what they are, we'll
                do this part for you
            </div>
            <NewTaskForm
                handleAddTask={(task) => handleAddTask(task)}
            />
            <NewBoardForm
                handleAddBoard={(board) => handleAddBoard(board)}
            />
            <BoardCollection
                tasks={tasks}
                handleHorizontalTaskMove={(args) => handleHorizontalTaskMove(args)}
                handleVerticalTaskMove={(args) => handleVerticalTaskMove(args)}
                handleTaskDelete={(args) => handleTaskDelete(args)}
                handleEditTask={(args) => handleEditTask(args)}
            />
        </div>
    );
}

export default App;
