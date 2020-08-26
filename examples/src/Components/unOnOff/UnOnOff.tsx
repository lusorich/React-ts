import React, { useState } from 'react';

export const UnOnOff: React.FC = () => {
    const [ind, setIndi] = useState<boolean>(false);

    const onStyle = {
        color: ind ? "green" : "black",
    }

    const offStyle = {
        color: !ind ? "green" : "black",
    }

    const indStyle = {
        color: ind ? "red" : "black"
    }
    return (
        <>
            <button style={onStyle} onClick={() => { setIndi(true) }}>On</button>
            <button style={offStyle} onClick={() => { setIndi(false) }}>Off</button>
            <span style={indStyle}>O</span>
        </>
    );
}