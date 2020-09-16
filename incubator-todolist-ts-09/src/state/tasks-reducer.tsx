import { TasksStateType } from '../App';
import {v1} from 'uuid';

export type RemoveTaskActionType = {
    type: 'REMOVE-TODOLIST',
    id: string
}
export type AddTaskActionType = {
    type: 'ADD-TODOLIST',
    title: string
}

type ActionsType = RemoveTaskActionType | AddTaskActionType;

export const taskReducer = (state: Array<TasksStateType>, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state;
        case 'ADD-TODOLIST':
            return state;
        default:
            throw new Error("I don't understand this type")
    }
}

export const RemoveTodolistAC = (todolistId: string): RemoveTaskActionType => {
    return { type: 'REMOVE-TODOLIST', id: todolistId}
}
export const AddTodolistAC = (title: string): AddTaskActionType => {
    return { type: 'ADD-TODOLIST', title: title}
}
