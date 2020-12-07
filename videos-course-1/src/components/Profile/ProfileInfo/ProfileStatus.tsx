import React, { useState } from 'react';

const ProfileStatus = (props: any) => {
    const [editMode, setEditMode] = useState(false);
    console.log(editMode);
    return (
        <>
            {editMode
                ? <div>
                    <input
                        value={props.status}
                        onBlur={() => setEditMode(false)}
                        autoFocus
                    />
                </div>
                : <div
                    onDoubleClick={() => setEditMode(true)}
                >
                    <span>{props.status}</span>
                </div>}
        </>
    )
}

export default ProfileStatus;