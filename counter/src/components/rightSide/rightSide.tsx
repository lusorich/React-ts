import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { storeType, updateResAC } from '../../store/store';
import s from './rightSide.module.css';

type propsType = {
    store: storeType
}

const RightSide = (props: propsType) => {

    const minValue = props.store.getState().min;
    const maxValue = props.store.getState().max;
    let resValue = props.store.getState().res;

    let [isError, setError] = useState(false);
    let [textError, setTextError] = useState('');

    useEffect(() => {
        if (minValue === maxValue) {
            setError(true);
            setTextError('Значения не должны быть равны')
        }
        if (minValue < 0 || maxValue < 0) {
            setError(true);
            setTextError('Значение должно быть меньше нуля')
        }
    })


    const incClickHandler = () => {
        if (resValue < maxValue) {
            props.store.dispatch(updateResAC(resValue += 1))
        } else {
            alert('Mnogo');
        }
    }
    const resClickHandler = () => {
        props.store.dispatch(updateResAC(minValue));
    }
    return (
        <div className={s['result']}>
            <div className={s['result__count-wrapper']}>
                <textarea className={s['result__count-value']} value={isError ? textError : resValue}></textarea>
            </div>
            <div className={s['result__settings-wrapper']}>
                <button className={
                    resValue < maxValue ? s['result__button'] : `${s['result__button']} ${s['result__button--unactive']}`}
                    onClick={incClickHandler}>inc</button>
                <button className={s['result__button']} onClick={resClickHandler}>reset</button>
            </div>
        </div>
    )

}

export default RightSide;