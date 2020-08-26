import React from 'react';

type propsType = {
    selected: boolean
}

const Star = (props: propsType) => {
    
    if (props.selected) {
        return <span><b>star </b></span>
    } else {
        return <span>star</span>
    }
}

export default Star;