import { combineReducers, createStore, applyMiddleware } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import thunk from 'redux-thunk';
import { reducer as formReducer } from "redux-form";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let reduxStore = createStore(reducers, applyMiddleware(thunk));


export default reduxStore;