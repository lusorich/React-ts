import React from 'react';
import './App.css';
import { ToDoList } from './ToDoList';

export function App() {

    return (
        <div className='App'>
            <ToDoList on={true}/>
        </div>
    )
}
