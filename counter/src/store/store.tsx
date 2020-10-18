import {rerenderEntireTree} from '../index';

export type stateType = {
    min: number,
    max: number,
    res: number
}

export type storeType = {
    _state: stateType,
    getState: () => stateType,
    dispatch: (action: actionsType) => void
}

const UPDATE_MIN_NUMBER = 'UPDATE-MIN-NUMBER';
const UPDATE_MAX_NUMBER = 'UPDATE-MAX-NUMBER';
const UPDATE_RES = 'UPDATE-RES';

export type updateMinNumberActionType = {
    type: 'UPDATE-MIN-NUMBER',
    num: number
}

export type updateMaxNumberActionType = {
    type: 'UPDATE-MAX-NUMBER',
    num: number
}

export type updateResActionType = {
    type: 'UPDATE-RES',
    res: number
}


export const updateMinNumberAC = (num: number): updateMinNumberActionType => ({
    type: UPDATE_MIN_NUMBER,
    num
})

export const updateMaxNumberAC = (num: number): updateMaxNumberActionType => ({
    type: UPDATE_MAX_NUMBER,
    num
})

export const updateResAC = (num: number): updateResActionType => ({
    type: UPDATE_RES,
    res: num
})

export type actionsType = updateMinNumberActionType | updateMaxNumberActionType | updateResActionType;

const store: storeType = {
    _state: {
        min: 0,
        max: 0,
        res: 0
    },
    dispatch(action: actionsType) {
        switch (action.type) {
            case UPDATE_MIN_NUMBER:
                this._state.min = action.num;
                return rerenderEntireTree(this._state);
            case UPDATE_MAX_NUMBER:
                this._state.max = action.num;
                return rerenderEntireTree(this._state);
            case UPDATE_RES:
                this._state.res = action.res;
                return rerenderEntireTree(this._state);
            default:
                return this._state;
        }
    },
    getState() {
        return this._state;
    }
}

export default store;