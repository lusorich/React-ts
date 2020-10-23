import axios, { ResponseType } from 'axios';

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": '1141da07-ebec-4731-a397-21d7e8f5304a'
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})

export type todolistType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}

export type TaskType = {
    description: string,
    title: string,
    completed: boolean,
    priority: number,
    startDate: string,
    deadline: string,
    id: string,
    todolistId: string,
    order: number,
    addedDate: string

}

type responseType<D = {}> = {
    resultCode: number,
    messages: Array<string>,
    data: D
}

type getTasksResponse = {
    error: string | null,
    totalCount: number,
    items: TaskType[]
}

type createUpdateTaskResponse = {
    data: {
        item: TaskType
    },
    resultCode: number,
    messages: Array<string>
}



export const todolistsAPI = {
    getTodolists() {
        return instance.get<Array<todolistType>>('todo-lists');
    },
    createTodolist(newTitle: string) {
        return instance.post<responseType<{ item: todolistType }>>("todo-lists", {
            title: newTitle
        })
    },
    deleteTodoilst(todolistId: string) {
        return instance.delete<responseType>(`todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, newTitle: string) {
        return instance.put<responseType>(`todo-lists/${todolistId}`, { title: newTitle })
    },
    getTasks(todolistId: string) {
        return instance.get<getTasksResponse>("todo-lists/" + todolistId + "/tasks");
    },
    createTask(todolistId: string, title: string) {
        return instance.post<createUpdateTaskResponse>("todo-lists/" + todolistId + "/tasks", {
            title: title
        });
    },
    updateTask(todolistId: string, newTitle: string) {
        return instance.put<createUpdateTaskResponse>("todo-lists/" + todolistId + "/tasks", {
            title: newTitle
        });
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<responseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    }

}