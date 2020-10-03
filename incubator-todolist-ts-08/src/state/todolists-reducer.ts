import { FilterValuesType, TodolistType } from '../App';
import { v1 } from 'uuid';

type ActionType = {
    type: string,
    [key: string]: any
}

export type RemoveTodolistActionType = {
    type: "REMOVE-TODOLIST",
    id: string
}

export const RemoveTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return { type: 'REMOVE-TODOLIST', id: todolistId };
}

export type AddTodolistActionType = {
    type: "ADD-TODOLIST",
    title: string
}
export const AddTodolistAC = (newTitle: string): AddTodolistActionType => {
    return { type: "ADD-TODOLIST", title: newTitle };
}

export type ChangeTodolistTitleActionType = {
    type: "CHANGE-TODOLIST-TITLE",
    id: string,
    title: string
}

export const ChangeTodolistTitleAC = (newId: string, newTitle: string): ChangeTodolistTitleActionType => {
    return { type: "CHANGE-TODOLIST-TITLE", id: newId, title: newTitle };
}

export type ChangeTodolistFilterActionType = {
    type: "CHANGE-TODOLIST-FILTER",
    id: string,
    filter: FilterValuesType
}

export const ChangeTodolistFilterAC = (newId: string, newFilter: FilterValuesType): ChangeTodolistFilterActionType => {
    return { type: "CHANGE-TODOLIST-FILTER", id: newId, filter: newFilter };
}

type ActionsType = RemoveTodolistActionType | AddTodolistActionType
    | ChangeTodolistTitleActionType | ChangeTodolistFilterActionType;

export const todolistsReducer = (state: Array<TodolistType>, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return [...state.filter(i => i.id !== action.id)];
        case 'ADD-TODOLIST':
            return [...state, { id: v1(), filter: "all", title: action.title }];
        case 'CHANGE-TODOLIST-TITLE':
            let copyState = [...state];
            copyState = copyState
                .map(i => {
                    return { ...i };
                })
                .map(j => {
                    if (j.id === action.id) {
                        j.title = action.title;
                        return j;
                    } else return j;
                });
            return copyState;
        case 'CHANGE-TODOLIST-FILTER':
            let copyState2 = [...state];
            copyState2 = copyState2
                .map(i => {
                    return { ...i };
                })
                .map(j => {
                    if (j.id === action.id) {
                        j.filter = action.filter;
                        return j;
                    } else return j;
                });
            return copyState2;
        default:
            throw new Error('Error');
    }
}

