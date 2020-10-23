import { AddBoxOutlined } from '@material-ui/icons';
import axios from 'axios';

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": '1141da07-ebec-4731-a397-21d7e8f5304a'
    }
}

export type todolistType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}

type responseType<D> = {
    resultCode: number,
    messages: Array<string>,
    data: D
}

export const todolistsAPI = {
    getTodolists() {
        return axios.get<Array<todolistType>>("https://social-network.samuraijs.com/api/1.1/todo-lists", settings);
    },
    createTodolist(newTitle: string) {
        return axios.post<responseType<{ item: todolistType }>>("https://social-network.samuraijs.com/api/1.1/todo-lists", {
            title: newTitle
        }, settings)
    },
    deleteTodoilst(todolistId: string) {
        return axios.delete<responseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
    },
    updateTodolist(todolistId: string, newTitle: string) {
        return axios.put<responseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, { title: newTitle }, settings)
    },
    getTasks(todolistId: string) {
        return axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists/" + todolistId + "/tasks", settings);
    },
    createTask(todolistId: string, title: string) {
        return axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists/" + todolistId + "/tasks", {
            title: title
        }, settings);
    },
    updateTask(todolistId: string, newTitle: string) {
        return axios.put("https://social-network.samuraijs.com/api/1.1/todo-lists/" + todolistId + "/tasks", {
            title: newTitle
        }, settings);
    },
    deleteTask(todolistId: string, taskId: string) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks/${taskId}`, settings)
    }

}