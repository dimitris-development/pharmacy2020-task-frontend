import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer, userReducer, errorUserReducer } from '../reducers'
import reduxPromise from 'redux-promise-middleware'

const errorsReducer = combineReducers({
    user : errorUserReducer
})

const reducer = combineReducers({
    auth : authReducer,
    user : userReducer,
    errors: errorsReducer,
})

const store = configureStore({
    reducer: reducer,
    middleware: [reduxPromise, ...getDefaultMiddleware()]
});

export default store