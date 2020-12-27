import { Dispatch } from "redux";
import { getAuthUser } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const initialState = {
    initialized: false
}
const appReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default: return state;
    }
}

export const initializeApp = () => (dispatch: Dispatch) => {
    //@ts-ignore  
    let promise = dispatch(getAuthUser());
    promise.then(() => dispatch(initializedSuccess()));
}


export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export default appReducer;