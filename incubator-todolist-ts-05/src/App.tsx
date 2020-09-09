import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';
import { AddItemForm } from './AddItemForm';

export type FilterValuesType = "all" | "active" | "completed";

type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    let todoListId1 = v1();
    let todoListId2 = v1();

    let [tasks, setTasks] = useState({
        [todoListId1]: [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true }
        ],
        [todoListId2]: [
            { id: v1(), title: "React", isDone: true },
            { id: v1(), title: "Redux", isDone: true }
        ]
    });

    let [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        { id: todoListId1, title: "What to Learn", filter: "all" },
        { id: todoListId2, title: "What to buy", filter: "all" }
    ])


    function removeTask(id: string, todoListId: string) {
        let todoListTasks = tasks[todoListId];
        tasks[todoListId] = todoListTasks.filter(t => t.id !== id);
        setTasks({ ...tasks });
    }

    function addTask(title: string, todoListId: string) {
        let task = { id: v1(), title: title, isDone: false };
        let todoListTasks = tasks[todoListId];
        tasks[todoListId] = [task, ...todoListTasks];
        setTasks({ ...tasks });
    }

    function changeStatus(taskId: string, isDone: boolean, todoListId: string) {
        let todoListTasks = tasks[todoListId];
        let task = todoListTasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
            setTasks({ ...tasks });
        }
    }

    function changeTaskTitle(taskId: string, title: string, todoListId: string) {
        let todoListTasks = tasks[todoListId];
        let task = todoListTasks.find(t => t.id === taskId);
        if (task) {
            task.title = title;
            setTasks({ ...tasks });
        }
    }

    function changeFilter(value: FilterValuesType, todoListID: string) {
        let todoList = todoLists.find(tl => tl.id === todoListID);

        if (todoList) {
            todoList.filter = value;
            setTodoLists([...todoLists]);
        }
    }

    function removeTodoList(id: string) {
        let newTodoLists = todoLists.filter(todoList => todoList.id !== id);
        setTodoLists([...newTodoLists]);
        delete tasks[id];
        setTasks({ ...tasks });

    }

    function addTodoList(title: string) {
        let newTodoListID = v1();
        let newTodoList: TodoListType = {
            id: newTodoListID, title: title, filter: "all"
        };
        console.log(newTodoList);
        setTodoLists([...todoLists, newTodoList]);
        setTasks({
            ...tasks,
            [newTodoListID]: []
        });
    }

    function changeTodoListTitle(title: string, todoListID: string) {
        let todoList = todoLists.find(tl => tl.id === todoListID);

        if (todoList) {
            todoList.title = title;
            setTodoLists([...todoLists]);
        }

    }

    return (
        <div className="App">
            <AddItemForm addItem={addTodoList} />
            {
                todoLists.map((todoItem) => {
                    let allTodoListTasks = tasks[todoItem.id];
                    let tasksForTodolist = allTodoListTasks;

                    if (todoItem.filter === "active") {
                        tasksForTodolist = allTodoListTasks.filter(t => t.isDone === false);
                    }
                    if (todoItem.filter === "completed") {
                        tasksForTodolist = allTodoListTasks.filter(t => t.isDone === true);
                    }
                    return (
                        <Todolist
                            key={todoItem.id}
                            id={todoItem.id}
                            title={todoItem.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={todoItem.filter}
                            removeTodoList={removeTodoList}
                            changeTaskTitle={changeTaskTitle}
                            changeTodoListTitle={changeTodoListTitle}
                        />
                    )
                })
            }
            {/* <Todolist title="What to learn"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={filter}
            /> */}
        </div>
    );
}

export default App;
