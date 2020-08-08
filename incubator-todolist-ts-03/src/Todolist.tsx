import React, { useState, ChangeEvent, EventHandler, Key, KeyboardEvent } from 'react';
import { FilterValuesType } from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState<string>('');

    const addTask = () => {
        if (title.trim()) {
            props.addTask(title.trim());
            setTitle(title.trim());
        }
    }

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const onKeyPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTask();
        }
    }

    const onFilterAllClick = () => props.changeFilter("all");
    const onFilterActiveClick = () => props.changeFilter("active");
    const onFilterCompletedClick = () => props.changeFilter("completed");

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                onChange={onChangeTitle}
                onKeyPress={onKeyPressEnter} />
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onRemoveTask = () => { props.removeTask(t.id) };
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone} />
                            <span>{t.title}</span>
                            <button onClick={onRemoveTask}>x</button>
                        </li>)
                })
            }
        </ul>
        <div>
            <button onClick={onFilterAllClick}>
                All
            </button>
            <button onClick={onFilterActiveClick}>
                Active
            </button>
            <button onClick={onFilterCompletedClick}>
                Completed
            </button>
        </div>
    </div>
}
