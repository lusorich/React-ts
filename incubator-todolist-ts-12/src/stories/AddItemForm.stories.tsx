import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { AddItemForm } from '../AddItemForm';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Todolists/AddItemForm',
    component: AddItemForm,
} as Meta;

export const AddItemFormBaseExample = (props: any) => {
    return (<AddItemForm addItem={action('Button inside form clicked')} />)
}

