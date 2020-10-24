import React, { ChangeEvent } from 'react';
import s from './leftSide.module.css';

const LeftSide = (props: any) => {
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateMinNumber(+e.currentTarget.value);
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateMaxNumber(+e.currentTarget.value);
    }

    const onClickHandler = () => {
        if (props.counter.min >= props.counter.max) {
            alert('Error');
            props.updateRes(0);
            return;
        }
        props.updateRes(props.counter.min);
    }

    return (
        <div className={s['settings']}>
            <div className={s['wrapper']}>
                <div className={s['wrapper-inner']}>
                    <span>min value:</span>
                    <input onChange={onChangeMinValue} value={props.counter.min} type='number'></input>
                </div>
                <div className={s['wrapper-inner']}>
                    <span>max value:</span>
                    <input onChange={onChangeMaxValue} value={props.counter.max} type='number'></input>
                </div>
            </div>
            <div className={s['wrapper-button']}>
                <button className={s['settings__button']} onClick={onClickHandler}>set</button>
            </div>
        </div>
    )
}

export default LeftSide;