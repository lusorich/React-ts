import { TodolistType } from '../App';

type ActionType = {
    type: string,
    [key: string]: any
}

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return [...state.filter(i => i.id !== action.id)];
        default:
            throw new Error('Error');
    }
}