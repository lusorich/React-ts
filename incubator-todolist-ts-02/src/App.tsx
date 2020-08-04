import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    const [tasks, setTasks] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "ClojureScript", isDone: false },
        { id: 5, title: "NodeJS", isDone: false }
    ])

    const [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodoList = tasks;

    if (filter === "active") {
        tasksForTodoList = tasks.filter(elem => elem.isDone === false)
    }

    if (filter === "completed") {
        tasksForTodoList = tasks.filter(elem => elem.isDone === true)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    function removeTask(taskId: number) {
        let newTasks = tasks.filter(i => i.id !== taskId)
        setTasks(newTasks);
    }

    return (
        <div className="App">
            <Todolist removeTask={removeTask} changeFilter={changeFilter} tasks={tasksForTodoList} title="What to learn" />
        </div>
    );
}

export default App;
