import React, { ChangeEvent, useState } from 'react';
import { Z_STREAM_ERROR } from 'zlib';

type EditableSpanPropsType = {
    value: string,
    changeValue: (newValue: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activatedEditMode = () => {
        setEditMode(true);
    }

    const deActivatedEditMode = () => {
        setEditMode(false);
        props.changeValue(title);
    }

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    return (
        editMode
            ? <input onChange={onChangeValue} value={title} onBlur={deActivatedEditMode} autoFocus={true}/>
            : <span onDoubleClick={activatedEditMode}>{props.value}</span>
    )
}