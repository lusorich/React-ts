import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { AddItemForm } from '../AddItemForm';
import { action } from '@storybook/addon-actions';
import { Task } from '../Task';

export default {
    title: 'Todolists/Task Stories',
    component: Task,
} as Meta;

const changeStatusCB = action('Change status');
const removeTaskCB = action('Remove task');
const changeTaskTitleCB = action('Changed task title');

export const TaskBaseExample = (props: any) => {
    return (
        <div>
            <Task
                task={{ id: '1', isDone: true, title: 'CSS' }}
                changeTaskStatus={changeStatusCB}
                removeTask={removeTaskCB}
                changeTaskTitle={changeTaskTitleCB}
                todolistId={"todolistId1"}
            />
            <Task
                task={{ id: '2', isDone: false, title: 'HTML' }}
                changeTaskStatus={changeStatusCB}
                removeTask={removeTaskCB}
                changeTaskTitle={changeTaskTitleCB}
                todolistId={"todolistId1"}
            />
        </div>
    )
}

