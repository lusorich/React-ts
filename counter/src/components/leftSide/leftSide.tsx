import React, { ChangeEvent } from 'react';
import { actionsType, storeType, updateMinNumberAC, updateMaxNumberAC } from '../../store/store';

type propsType = {
    store: storeType,
    dispatch: (action: actionsType) => void
}

const LeftSide = (props: propsType) => {
    console.log(props.store.getState());

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updateMinNumberAC(+e.currentTarget.value));
        console.log(props.store.getState());
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updateMaxNumberAC(+e.currentTarget.value));
        console.log(props.store.getState());
    }

    return (
        <div>
            <div>
                <span>min value:</span>
                <input onChange={onChangeMinValue} type='number' min='0' max='15'></input>
            </div>
            <div>
                <span>max value:</span>
                <input onChange={onChangeMaxValue} type='number' min='0' max='15'></input>
            </div>
            <div>
                <button>set</button>
            </div>
        </div>
    )
}

export default LeftSide;