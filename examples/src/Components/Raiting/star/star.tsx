import React from 'react';

type propsType = {
    selected: boolean,
    setValue: () => void,
    value: 1 | 2 | 3 | 4 | 5
}

const Star = (props: propsType) => {

    return <span onClick={() => props.setValue()}> {props.selected ? <b>star </b> : 'star'} </span>
}

export default Star;