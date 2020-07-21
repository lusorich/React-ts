import React from 'react';
import './App.css';
import {ToDoList} from './ToDoList';

export function App() {

    const task1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
    ]
    const task2 = [
        { id: 1, title: "Hello World", isDone: true },
        { id: 2, title: "I am happy", isDone: false },
        { id: 3, title: "RYo", isDone: false },
    ]

    return (
        <div className='App'>
            <ToDoList title='What to Learn' tasks={task1}/>
            <ToDoList title='Songs' tasks={task2}/>
        </div>
    )
}
