import { TasksStateType } from '../App';
import { v1 } from 'uuid';
import { AddTodolistActionType, RemoveTodolistActionType } from './todolists-reducer';

type ActionsType = RemoveTaskActionType | AddTaskActionType | ChangeTaskStatusType | ChangeTaskTitleType | AddTasksType | AddTodolistActionType | RemoveTodolistActionType;

// let [tasks, setTasks] = useState<TasksStateType>({
// 
//     [todolistId2]: [
//         {id: v1(), title: "Milk", isDone: true},
//         {id: v1(), title: "React Book", isDone: true}
//     ]
// 
//     [todolistId2]: [
//         {id: v1(), title: "Milk", isDone: true},
//         {id: v1(), title: "React Book", isDone: true}
//     ]
// });

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    //@ts-ignore
    let copyTasks = state[action.todoListId];
    switch (action.type) {
        case 'REMOVE-TASK':
            copyTasks = copyTasks.filter((i: any) => { return i.id !== action.taskId });
            return { ...state, [action.todoListId]: [...copyTasks] };
        case 'ADD-TASK':
            return {
                ...state, [action.todoListId]: [
                    {
                        id: v1(),
                        title: action.title,
                        isDone: false
                    }, ...copyTasks
                ]
            };
        case 'CHANGE-TASK-STATUS':
            copyTasks = copyTasks.map((i: any) => {
                if (i.id === action.taskId) {
                    return { ...i, isDone: !i.isDone };
                }
                return { ...i };
            })
            return {
                ...state, [action.todoListId]: [
                    ...copyTasks
                ]
            }
        case 'CHANGE-TASK-TITLE':
            copyTasks = copyTasks.map((i: any) => {
                if (i.id === action.taskId) {
                    return { ...i, title: action.newTitle };
                }
                return { ...i };
            })
            return {
                ...state, [action.todoListId]: [
                    ...copyTasks
                ]
            }
        case 'ADD-TODOLIST':
            return {
                ...state, [action.todolistId]: []
            }
        case 'REMOVE-TODOLIST':
            let copyState = { ...state };
            delete copyState[action.id];
            return {...copyState};
        default:
            throw new Error("I don't understand this type")
    }
}


export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    taskId: string,
    todoListId: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK',
    title: string,
    todoListId: string
}

export type ChangeTaskStatusType = {
    type: 'CHANGE-TASK-STATUS'
    taskId: string,
    todoListId: string
}

export type ChangeTaskTitleType = {
    type: 'CHANGE-TASK-TITLE',
    taskId: string,
    todoListId: string,
    newTitle: string
}

export type AddTasksType = {
    type: 'ADD-TASKS'
}

export const RemoveTaskAC = (taskId: string, todoListId: string): RemoveTaskActionType => {
    return { type: 'REMOVE-TASK', todoListId: todoListId, taskId: taskId }
}

export const AddTaskAC = (title: string, todoListId: string): AddTaskActionType => {
    return { type: 'ADD-TASK', todoListId, title, }
}

export const ChangeTaskStatusAC = (taskId: string, todoListId: string): ChangeTaskStatusType => {
    return { type: 'CHANGE-TASK-STATUS', taskId, todoListId }
}

export const ChangeTaskTitleAC = (taskId: string, todoListId: string, newTitle: string): ChangeTaskTitleType => {
    return { type: 'CHANGE-TASK-TITLE', taskId, todoListId, newTitle }
}

export const AddTasksAC = (): AddTasksType => {
    return { type: 'ADD-TASKS' }
}