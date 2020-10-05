import {
    AddTodolistAC,
    ChangeTodolistFilterAC,
    ChangeTodolistTitleAC,
    RemoveTodolistAC,
    todolistsReducer
} from './todolists-reducer';
import { v1 } from 'uuid';
import { FilterValuesType, TasksStateType, TodolistType } from '../App';
import { AddTaskAC, AddTasksAC, tasksReducer } from './tasks-reducer';

test('correct todolist should be removed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<TodolistType> = [
        { id: todolistId1, title: "What to learn", filter: "all" },
        { id: todolistId2, title: "What to buy", filter: "all" }
    ]
    const startStateTasks: TasksStateType = {
        [todolistId1]: [],
        [todolistId2]: []
    };
    const action = RemoveTodolistAC(todolistId1);
    const endStateTasks = tasksReducer(startStateTasks, action);
    const endState = todolistsReducer(startState, action);
    const keys = Object.keys(endStateTasks);

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
    expect(keys.length).toBe(1);
});

test('correct todolist should be added', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolistTitle = "New Todolist";

    const startState: Array<TodolistType> = [
        { id: todolistId1, title: "What to learn", filter: "all" },
        { id: todolistId2, title: "What to buy", filter: "all" }
    ]

    const startStateTasks: TasksStateType = {
        [todolistId1]: [
            { id: "1", title: "CSS", isDone: false },
            { id: "2", title: "JS", isDone: true },
            { id: "3", title: "React", isDone: false }
        ],
        [todolistId2]: [
            { id: "1", title: "bread", isDone: false },
            { id: "2", title: "milk", isDone: true },
            { id: "3", title: "tea", isDone: false }
        ]
    };
    const action = AddTodolistAC(newTodolistTitle);

    const endState = todolistsReducer(startState, action);
    const endStateTasks = tasksReducer(startStateTasks, action);
    const todolistId = endState[2].id;
    const tasksId = Object.keys(endStateTasks);

    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodolistTitle);
    expect(endState[2].id).toBeDefined();
    expect(todolistId).toBe(tasksId[2]);
});

test('correct todolist should change its name', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolistTitle = "New Todolist";

    const startState: Array<TodolistType> = [
        { id: todolistId1, title: "What to learn", filter: "all" },
        { id: todolistId2, title: "What to buy", filter: "all" }
    ]


    const action = ChangeTodolistTitleAC(todolistId2, newTodolistTitle);

    const endState = todolistsReducer(startState, action);

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
});

test('correct filter of todolist should be changed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newFilter: FilterValuesType = "completed";

    const startState: Array<TodolistType> = [
        { id: todolistId1, title: "What to learn", filter: "all" },
        { id: todolistId2, title: "What to buy", filter: "all" }
    ]

    const action = ChangeTodolistFilterAC(todolistId2, newFilter);

    const endState = todolistsReducer(startState, action);

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
});

