import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stateType, updateMaxNumberAC, updateMinNumberAC, updateResAC } from '../../redux/counter-reducer';
import { AppRootStateType } from '../../redux/store';
import s from './leftSide.module.css';

const LeftSide = () => {
    const stateRes = useSelector<AppRootStateType, stateType>(state => state.counter)
    const dispatch = useDispatch();

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateMinNumberAC(+e.currentTarget.value));
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateMaxNumberAC(+e.currentTarget.value));
    }

    const onClickHandler = () => {
        if (stateRes.min >= stateRes.max) {
            alert('Error');
            dispatch(updateResAC(0));
            return;
        }
        dispatch(updateResAC(stateRes.min));
    }

    return (
        <div className={s['settings']}>
            <div className={s['wrapper']}>
                <div className={s['wrapper-inner']}>
                    <span>min value:</span>
                    <input onChange={onChangeMinValue} value={stateRes.min} type='number'></input>
                </div>
                <div className={s['wrapper-inner']}>
                    <span>max value:</span>
                    <input onChange={onChangeMaxValue} value={stateRes.max} type='number'></input>
                </div>
            </div>
            <div className={s['wrapper-button']}>
                <button className={s['settings__button']} onClick={onClickHandler}>set</button>
            </div>
        </div>
    )
}

export default LeftSide;