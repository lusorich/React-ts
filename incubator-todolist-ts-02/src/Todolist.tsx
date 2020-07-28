import React from 'react';
import removeTask, { FilterValuesType } from './App';
import changeFilter from './App';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (value: FilterValuesType) => void
}

export function Todolist({ title, tasks, removeTask, changeFilter }: PropsType) {
    return <div>
        <h3>{title}</h3>
        <div>
            <input />
            <button>+</button>
        </div>
        <ul>
            {
                tasks.map((elem) => {
                    return (
                        <li key={elem.id}>
                            <input type="checkbox" checked={elem.isDone}></input>
                            <span>{elem.title}</span>
                            <button onClick={() => removeTask(elem.id)}>x</button>
                        </li>
                    )
                })
            }
        </ul>
        <div>
            <button onClick={() => changeFilter("all")}>All</button>
            <button onClick={() => changeFilter("active")}>Active</button>
            <button onClick={() => changeFilter("completed")}>Completed</button>
        </div>
    </div>
}
