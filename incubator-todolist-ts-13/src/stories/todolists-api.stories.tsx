import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { todolistsAPI } from '../api/todolists-api';

export default {
    title: 'API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const res = todolistsAPI.getTodolists().then(res => setState(res.data));
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
// export const CreateTodolist = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         let promise = axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {
//             title: 'New Todolist'
//         }, settings)
//             .then(res => {
//                 setState(res.data);
//                 console.log(res.data);
//             })

//     }, [])

//     return <div> {JSON.stringify(state)}</div>
// }
// export const DeleteTodolist = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         // здесь мы будем делать запрос и ответ закидывать в стейт.
//         // который в виде строки будем отображать в div-ке
//         let promise = axios.delete("https://social-network.samuraijs.com/api/1.1/todo-lists/5eb8e837-f389-410e-a8b3-2ba4c09a0765", {
//             ...settings
//         })
//             .then(res => {
//                 setState(res.data);
//                 console.log(res.data);
//             })
//     }, [])

//     return <div> {JSON.stringify(state)}</div>
// }
// export const UpdateTodolistTitle = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         let promise = axios.put("https://social-network.samuraijs.com/api/1.1/todo-lists/f827024d-eb5e-45a0-a8a7-a42764992c59", {
//             title: 'HEY'
//         }, settings)
//             .then(res => {
//                 setState(res.data);
//                 console.log(res.data);
//             })
//     }, [])

//     return <div> {JSON.stringify(state)}</div>
// }
