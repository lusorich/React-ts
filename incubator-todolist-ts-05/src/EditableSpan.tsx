import React, { ChangeEvent, useState } from 'react';

type EditableSpanPropsType = {
    value: string
}

export function EditableSpan(props: EditableSpanPropsType) {

    let [editMode, setEditMode] = useState(false);

    const activatedEditMode = () => {
        setEditMode(true);
    }

    const deActivatedEditMode = () => {
        setEditMode(false);
    }

    return (
        editMode
            ? <input value={props.value} onBlur={deActivatedEditMode} autoFocus={true}/>
            : <span onDoubleClick={activatedEditMode}>{props.value}</span>
    )
}