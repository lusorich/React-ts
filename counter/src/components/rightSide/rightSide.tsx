import React from 'react';
import { storeType, updateResAC } from '../../store/store';
import s from './rightSide.module.css';

type propsType = {
    store: storeType
}

const RightSide = (props: propsType) => {

    const incClickHandler = () => {
        if (props.store.getState().res < props.store.getState().max) {
            props.store.dispatch(updateResAC(props.store.getState().res += 1))
        } else {
            alert('Mnogo');
        }
    }
    const resClickHandler = () => {
        props.store.dispatch(updateResAC(props.store.getState().min))
    }
    return (
        <div>
            <div>
                <input type='text' value={props.store.getState().res}></input>
            </div>
            <div>
                <button className={
                    props.store.getState().res < props.store.getState().max ? 'def' : s.unactive}
                    onClick={incClickHandler}>inc</button>
                <button onClick={resClickHandler}>reset</button>
            </div>
        </div>
    )

}

export default RightSide;