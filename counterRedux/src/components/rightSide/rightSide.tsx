import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stateType, updateResAC } from '../../redux/counter-reducer';
import { AppRootStateType } from '../../redux/store';
import s from './rightSide.module.css';

const RightSide = () => {
    let [isError, setError] = useState(false);
    let [textError, setTextError] = useState('');

    const stateRes = useSelector<AppRootStateType, stateType>(state => state.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        if (stateRes.min === stateRes.max) {
            setError(true);
            setTextError('Значения не должны быть равны');
        } else if (stateRes.min < 0 || stateRes.max < 0) {
            setError(true);
            setTextError('Значение должно быть меньше нуля');
        } else {
            setError(false);
        }
    })


    const incClickHandler = () => {
        if (stateRes.res < stateRes.max) {
            dispatch(updateResAC(stateRes.res += 1))
        } else {
            alert('Mnogo');
        }
    }
    const resClickHandler = () => {
        dispatch(updateResAC(stateRes.min));
    }
    return (
        <div className={s['result']}>
            <div className={s['result__count-wrapper']}>
                <textarea className={s['result__count-value']} value={isError ? textError : stateRes.res}></textarea>
            </div>
            <div className={s['result__settings-wrapper']}>
                <button className={
                    stateRes.res < stateRes.max ? s['result__button'] : `${s['result__button']} ${s['result__button--unactive']}`}
                    onClick={incClickHandler}>inc</button>
                <button className={s['result__button']} onClick={resClickHandler}>reset</button>
            </div>
        </div>
    )

}

export default RightSide;