import React, {useState} from 'react';
import './App.css';
import NewTaskForm from "./components/createNewTask/NewTaskForm";
import BoardCollection from "./components/boardBody/BoardCollection";
import { v4 as uuidv4 } from 'uuid';

const tasksInitial = [
    {
        boardName: 'todo',
        color: 'secondary',
        boardTasks: [
            {
                id: uuidv4(),
                taskTitle: 'todo 1',
                taskBody: 'do stuff'
            },
            {
                id: uuidv4(),
                taskTitle: 'todo 12',
                taskBody: 'do stuff'
            },
            {
                id: uuidv4(),
                taskTitle: 'todo 2',
                taskBody: 'Fix drag and drop'
            }
        ],
    },
    {
        boardName: 'progress',
        color: 'primary',
        boardTasks: [
            {
                id: uuidv4(),
                taskTitle: 'todo 3',
                taskBody: 'Add drag event handlers'
            }
        ],
    },
    {
        boardName: 'review',
        color: 'warning',
        boardTasks: [
            {
                id: uuidv4(),
                taskTitle: 'todo 4',
                taskBody: 'do stuff'
            }
        ],
    },
    {
        boardName: 'done',
        color: 'success',
        boardTasks: [
            {
                id: uuidv4(),
                taskTitle: 'todo 5',
                taskBody: 'do stuff'
            }
        ],
    },
];

function App() {

    // const [tasks, setTasks] = useState([
    //     {sectionTitle: "TODO", sectionTasks: []},
    //     {sectionTitle: "IN PROGRESS", sectionTasks: []},
    //     {sectionTitle: "IN REVIEW", sectionTasks: []},
    //     {sectionTitle: "DONE", sectionTasks: []},
    // ]);
    //
    // const handleAddTask = (newTask) => {
    //     const updateTasks = tasks
    //         updateTasks.splice(0, 1, {
    //         sectionTitle: "TODO", sectionTasks: [...tasks[0].sectionTasks, newTask]})
    //     console.log(updateTasks);
    //     setTasks([...updateTasks]);
    // }

    const [tasks, setTasks] = useState(tasksInitial);

    const handleAddTask = (newTask) => {
        const updateTodoTasks = tasks.find(board => board.boardName === 'todo');
        const todoTasksIndex = tasks.findIndex(board => board.boardName === 'todo');
        updateTodoTasks.boardTasks.push({id: uuidv4(), ...newTask});
        setTasks([...tasks.splice(todoTasksIndex, 1, {...updateTodoTasks})]);
    }

    // const [toDoTasks, setToDoTasks] = useState([{taskTitle: 'Task 1', taskBody: 'Fix drag and drop'}]);
    // const [inProgressTasks, setInProgressTasks] = useState([{taskTitle: 'Task 2', taskBody: 'Fix drop bug'}]);
    // const [inReviewTasks, setInReviewTasks] = useState([{taskTitle: 'Task 3', taskBody: 'Add drag event handlers'}]);
    // const [doneTasks, setDoneTasks] = useState([{taskTitle: 'Task 4', taskBody: 'Test'}]);
    //
    // const handleAddTask = (task) => {
    //     setToDoTasks([...toDoTasks, task]);
    // }

    // const handleTaskMove = (moveFrom, moveFromSetter, moveTo, moveToSetter, taskIndex) => {
    //     const taskToMove = moveFrom[taskIndex];
    //     const updateCurrentSection = moveFrom;
    //     updateCurrentSection.splice(taskIndex, 1);
    //     moveFromSetter([...updateCurrentSection]);
    //     moveToSetter([...moveTo, taskToMove]);
    // }
    //
    // const handleTaskMoveToRight = (sectionTitle, taskIndex) => {
    //     if(sectionTitle === 'todo') handleTaskMove(toDoTasks, setToDoTasks, inProgressTasks, setInProgressTasks, taskIndex);
    //     if(sectionTitle === 'progress') handleTaskMove(inProgressTasks, setInProgressTasks, inReviewTasks, setInReviewTasks, taskIndex);
    //     if(sectionTitle === 'review') handleTaskMove(inReviewTasks, setInReviewTasks, doneTasks, setDoneTasks, taskIndex);
    // }
    //
    // const handleTaskMoveToLeft = (sectionTitle, taskIndex) => {
    //     if(sectionTitle === 'progress') handleTaskMove(inProgressTasks, setInProgressTasks, toDoTasks, setToDoTasks, taskIndex);
    //     if(sectionTitle === 'review') handleTaskMove(inReviewTasks, setInReviewTasks, inProgressTasks, setInProgressTasks, taskIndex);
    //     if(sectionTitle === 'done') handleTaskMove(doneTasks, setDoneTasks, inReviewTasks, setInReviewTasks, taskIndex);
    // }

    // const handleTaskDelete = (taskIndex) => {
    //     const updatedDoneTasks = doneTasks;
    //     updatedDoneTasks.splice(taskIndex, 1)
    //     setDoneTasks([...updatedDoneTasks]);
    // }
    //
    // const handleDragNDrop = (sectionTitle, task) => {
    //     console.log(sectionTitle);
    //     console.log(task)
    //     if(sectionTitle === 'todo') setToDoTasks([...toDoTasks, task]);
    //     if(sectionTitle === 'progress') setInProgressTasks([...inProgressTasks, task]);
    //     if(sectionTitle === 'review') setInReviewTasks([...inReviewTasks, task]);
    //     if(sectionTitle === 'done') setDoneTasks([...doneTasks, task]);
    // }

  return (
    <div className="App">
        <div className={"appHeader"}>Kanban Style Task Board</div>
        <div className={"appSubHeader"}>Concentrate on task completion instead of remembering what they are, we'll do this part for you</div>
        <NewTaskForm
            handleAddTask={(task) => {handleAddTask(task)}}
        />
        <BoardCollection
            tasks={tasks}
            handleTaskMove={(args) => handleTaskMove(args)}
            // toDoTasks={toDoTasks}
            // inProgressTasks={inProgressTasks}
            // inReviewTasks={inReviewTasks}
            // doneTasks={doneTasks}
            // handleTaskMoveToRight={((sectionTitle, taskIndex) => handleTaskMoveToRight(sectionTitle, taskIndex))}
            // handleTaskMoveToLeft={((sectionTitle, taskIndex) => handleTaskMoveToLeft(sectionTitle, taskIndex))}
            // onDeleteButtonClick={(taskIndex) => handleTaskDelete(taskIndex)}
            // handleDragNDrop={(sectionTitle, task) => handleDragNDrop(sectionTitle, task)}
        />

    </div>
  );
}

export default App;
