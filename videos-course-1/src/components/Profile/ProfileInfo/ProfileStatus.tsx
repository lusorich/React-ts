import React, { useEffect, useState } from 'react';

const ProfileStatus = (props: any) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value);
    }
    useEffect(() => {
        setStatus(props.status);
    }, [props.status])
    return (
        <>
            {editMode
                ? <div>
                    <input
                        value={status}
                        onChange={onStatusChange}
                        onBlur={() => {
                            setEditMode(false);
                            props.updateStatus(status);
                        }}
                        autoFocus
                    />
                </div>
                : <div
                    onDoubleClick={() => setEditMode(true)}
                >
                    <span>{status}</span>
                </div>}
        </>
    )
}

export default ProfileStatus;