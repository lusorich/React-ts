import { AddBoxOutlined } from '@material-ui/icons';
import axios from 'axios';

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": '1141da07-ebec-4731-a397-21d7e8f5304a'
    }
}

export type TodolistType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}

export const todolistsAPI = {
    getTodolists() {
        return axios.get<Array<TodolistType>>("https://social-network.samuraijs.com/api/1.1/todo-lists", settings);
    },
    createTodolist(newTitle: string) {
        return axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {
            title: newTitle
        }, settings)
    },
    deleteTodoilst(todolistId: string) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
    },
    updateTodolist(todolistId: string, newTitle: string) {
        return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, { title: newTitle }, settings)
    }

}