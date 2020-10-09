import React, {ChangeEvent, useState} from 'react';
import {TextField} from '@material-ui/core';
import {useCallback} from 'react';

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}

export const EditableSpan = React.memo(function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);
    console.log("ed");

    const activateEditMode = useCallback(() => {
        setEditMode(true);
        setTitle(props.value);
    }, [props.value]);
    const activateViewMode = useCallback(() => {
        setEditMode(false);
        props.onChange(title);
    }, [props.onChange]);

    const changeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }, []);

    return editMode
        ?    <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
        : <span onDoubleClick={activateEditMode}>{props.value}</span>
});
