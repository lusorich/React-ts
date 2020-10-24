import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import s from './rightSide.module.css';

const RightSide = (props: any) => {
    let [isError, setError] = useState(false);
    let [textError, setTextError] = useState('');

    useEffect(() => {
        if (props.counter.min === props.counter.max) {
            setError(true);
            setTextError('Значения не должны быть равны');
        } else if (props.counter.min < 0 || props.counter.max < 0) {
            setError(true);
            setTextError('Значение должно быть меньше нуля');
        } else {
            setError(false);
        }
    })


    const incClickHandler = () => {
        if (props.counter.res < props.counter.max) {
            props.updateRes(props.counter.res += 1)
        } else {
            alert('Mnogo');
        }
    }
    const resClickHandler = () => {
        props.updateRes(props.counter.min);
    }
    return (
        <div className={s['result']}>
            <div className={s['result__count-wrapper']}>
                <textarea className={s['result__count-value']} value={isError ? textError : props.counter.res}></textarea>
            </div>
            <div className={s['result__settings-wrapper']}>
                <button className={
                    props.counter.res < props.counter.max ? s['result__button'] : `${s['result__button']} ${s['result__button--unactive']}`}
                    onClick={incClickHandler}>inc</button>
                <button className={s['result__button']} onClick={resClickHandler}>reset</button>
            </div>
        </div>
    )

}

export default RightSide;