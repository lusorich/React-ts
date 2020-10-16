import React from 'react';
import { storeType } from '../../store/store';

type propsType = {
    store: storeType
}

const RightSide = (props: propsType) => {

    const a: any = props.store.getState();
    console.log(a.min);

    return (
        <div>
            <div>
                <input type='text' value={a.min}></input>
            </div>
            <div>
                <button>inc</button>
                <button>reset</button>
            </div>
        </div>
    )

}

export default RightSide;