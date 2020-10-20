import counterReducer from './counter-reducer';
import { combineReducers, createStore } from 'redux';

const reducers = combineReducers({
    counter: counterReducer
})

const store = createStore(reducers);
export type AppRootStateType = ReturnType<typeof reducers>
export default store;