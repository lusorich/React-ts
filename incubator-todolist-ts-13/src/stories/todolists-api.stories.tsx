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
