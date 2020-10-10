import React, { ChangeEvent } from 'react';
import { EditableSpan } from './EditableSpan';
import { Checkbox, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useCallback } from 'react';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    idTask: string
    idTodolist: string
    title: string
    isDone: boolean
    removeTask: (taskId: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
}

export const Task = React.memo(function Todolist(props: PropsType) {

    const onClickHandler = useCallback(() => props.removeTask(props.idTask, props.idTodolist), [])
    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.changeTaskStatus(props.idTask, newIsDoneValue, props.idTodolist);
    }, [])
    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.idTask, newValue, props.idTodolist);
    }, [])

    return <div>
        <div>
            <div key={props.idTask} className={props.isDone ? "is-done" : ""}>
                <Checkbox
                    checked={props.isDone}
                    color="primary"
                    onChange={onChangeHandler}
                />

                <EditableSpan value={props.title} onChange={onTitleChangeHandler} />
                <IconButton onClick={onClickHandler}>
                    <Delete />
                </IconButton>
            </div>
        </div>
    </div>
})


