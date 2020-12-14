import {applyMiddleware, combineReducers, createStore} from "redux";
import sidebarReducer from './sidebar-reducer';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import  thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPages: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;