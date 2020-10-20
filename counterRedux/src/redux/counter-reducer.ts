export type stateType = {
    min: number,
    max: number,
    res: number
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

const initialState: stateType = {
    min: 0,
    max: 0,
    res: 0
}

const counterReducer = (state: stateType = initialState, action: actionsType) => {
    switch (action.type) {
        case UPDATE_MIN_NUMBER:
            return { ...state, min: action.num }
        case UPDATE_MAX_NUMBER:
            return { ...state, max: action.num }
        case UPDATE_RES:
            state.res = action.res;
            return { ...state, res: action.res }
        default:
            return state;
    }
}

export default counterReducer;