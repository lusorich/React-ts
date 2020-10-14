import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { EditableSpan } from '../EditableSpan';

export default {
    title: 'Todolists/Editable span stories',
    component: EditableSpan,
} as Meta;

export const EditableSpanFormBaseExample = (props: any) => {
    return (
        <EditableSpan value={"StartValue"} onChange={action("value changed")}/>
    )
}

