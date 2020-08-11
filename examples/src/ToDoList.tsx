import React from 'react';
import s from './App.module.css';


type PropsType = {
    on: boolean
}

export const ToDoList: React.FC<PropsType> = ({on}) => {
    return (
        <div className="App">
            <button>On</button>
            <button>Off</button>
            {on && <span>O</span>}
        </div>
    );
}