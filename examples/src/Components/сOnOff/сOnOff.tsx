import React, { useState } from 'react';

type propsType = {
    onClick: () => void,
    ind: boolean
}

export const сOnOff = (props: propsType) => {
    const onStyle = {
        color: props.ind ? "green" : "black",
    }

    const offStyle = {
        color: !props.ind ? "green" : "black",
    }

    const indStyle = {
        color: props.ind ? "red" : "black"
    }
    return (
        <>
            <button style={onStyle} onClick={() => props.onClick}>On</button>
            <button style={offStyle} onClick={() => props.onClick}>Off</button>
            <span style={indStyle}>O</span>
        </>
    );
}