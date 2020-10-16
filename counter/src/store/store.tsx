import {rerenderEntireTree} from '../index';

export type stateType = {
    min: number,
    max: number
}

export type storeType = {
    _state: stateType,
    getState: () => void,
    dispatch: (action: actionsType) => void
}

const UPDATE_MIN_NUMBER = 'UPDATE-MIN-NUMBER';
const UPDATE_MAX_NUMBER = 'UPDATE-MAX-NUMBER';

export type updateMinNumberActionType = {
    type: 'UPDATE-MIN-NUMBER',
    num: number
}

export type updateMaxNumberActionType = {
    type: 'UPDATE-MAX-NUMBER',
    num: number
}

export const updateMinNumberAC = (num: number): updateMinNumberActionType => ({
    type: UPDATE_MIN_NUMBER,
    num
})

export const updateMaxNumberAC = (num: number): updateMaxNumberActionType => ({
    type: UPDATE_MAX_NUMBER,
    num
})

export type actionsType = updateMinNumberActionType | updateMaxNumberActionType;

const store: storeType = {
    _state: {
        min: 0,
        max: 0
    },
    dispatch(action: actionsType) {
        switch (action.type) {
            case UPDATE_MIN_NUMBER:
                // @ts-ignore
                this._state.min = action.num;
                // @ts-ignore
                return rerenderEntireTree(this._state);
            case UPDATE_MAX_NUMBER:
                // @ts-ignore
                this._state.max = action.num;
                // @ts-ignore
                return this._state;
            default:
                // @ts-ignore
                return this._state;
        }
    },
    getState() {
        return this._state;
    }
}

export default store;