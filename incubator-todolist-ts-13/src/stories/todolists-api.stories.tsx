import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { todolistsAPI } from '../api/todolists-api';

export default {
    title: 'API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolists().then(res => setState(res.data));
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.createTodolist('Hey Ho').then(res => setState(res.data));

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todolistsAPI.deleteTodoilst('80856793-3b27-47b0-9433-0513862f6346').then(res => setState(res.data));
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.updateTodolist('3b6c3353-c342-4243-aea9-cabce7ba3c8a', 'HHHHH').then(res => setState(res.data));
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '';
        todolistsAPI.getTasks('8eecd9eb-34cb-45d3-923c-975dcd3704e4').then(res => setState(res.data));
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '';
        todolistsAPI.createTask('8eecd9eb-34cb-45d3-923c-975dcd3704e4', 'newTask').then(res => setState(res.data));
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '';
        todolistsAPI.createTask('8eecd9eb-34cb-45d3-923c-975dcd3704e4', 'newTask2').then(res => setState(res.data));
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '';
        todolistsAPI.deleteTask('8eecd9eb-34cb-45d3-923c-975dcd3704e4', '7d68bdac-51e1-44f8-8c70-02a25a3793ee').then(res => setState(res.data));
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

