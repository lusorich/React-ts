import React, { ChangeEvent } from 'react';
import { actionsType, storeType, updateMinNumberAC, updateMaxNumberAC, updateResAC } from '../../store/store';
import s from './leftSide.module.css';

type propsType = {
    store: storeType,
    dispatch: (action: actionsType) => void
}

const LeftSide = (props: propsType) => {
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updateMinNumberAC(+e.currentTarget.value));
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updateMaxNumberAC(+e.currentTarget.value));
    }
    const onClickHandler = () => {
        if (props.store.getState().min >= props.store.getState().max) {
            alert('Error');
            updateResAC(0)
            return;
        }
        props.dispatch(updateResAC(props.store.getState().min));
    }


    return (
        <div className={s['settings']}>
            <div className={s['wrapper']}>
                <div className={s['wrapper-inner']}>
                    <span>min value:</span>
                    <input onChange={onChangeMinValue} value={props.store.getState().min} type='number'></input>
                </div>
                <div className={s['wrapper-inner']}>
                    <span>max value:</span>
                    <input onChange={onChangeMaxValue} value={props.store.getState().max} type='number'></input>
                </div>
            </div>
            <div className={s['wrapper-button']}>
                <button className={s['settings__button']} onClick={onClickHandler}>set</button>
            </div>
        </div>
    )
}

export default LeftSide;