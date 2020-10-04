import { TasksStateType } from '../App';
import { v1 } from 'uuid';

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

type ActionsType = RemoveTaskActionType | AddTaskActionType;

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
                        isDOne: false
                    }, ...copyTasks
                ]
            };
        default:
            throw new Error("I don't understand this type")
    }
}

export const RemoveTaskAC = (taskId: string, todoListId: string): RemoveTaskActionType => {
    return { type: 'REMOVE-TASK', todoListId: todoListId, taskId: taskId }
}

export const AddTaskAC = ( title: string, todoListId: string): AddTaskActionType => {
    return { type: 'ADD-TASK', todoListId, title,}
}